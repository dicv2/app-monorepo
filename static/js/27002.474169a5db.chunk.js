!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="c21bd5c1-e73f-46a8-b4f9-a4c5a2b44ec4",e._sentryDebugIdIdentifier="sentry-dbid-c21bd5c1-e73f-46a8-b4f9-a4c5a2b44ec4")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[27002],{593827:(e,r,a)=>{a.d(r,{L:()=>WalletAvatar});var t=a(503668),o=a.n(t),n=a(490343),s=a(491180),i=a(258988),p=a(831085);function WalletAvatarBase({size:e,img:r,wallet:a}){var t,o,d=r||a?.avatarInfo?.img;return d?s.A.isHwHiddenWallet({wallet:a})?(0,p.jsx)(n.Icon,{size:"$10",name:"LockSolid",color:"$iconSubdued"}):(0,p.jsxs)(n.Image,{size:e,"data-sentry-element":"Image","data-sentry-component":"WalletAvatarBase","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:[(0,p.jsx)(n.Image.Source,{source:null!=(t=i.UO[d])?t:i.UO.bear,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx"}),(0,p.jsx)(n.Image.Fallback,{delayMs:300,justifyContent:"center",alignItems:"center","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:(0,p.jsx)(n.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:null!=(o=a?.avatarInfo?.emoji)?o:""})})]}):null}function WalletAvatar({size:e="$10",status:r,badge:a,img:t,wallet:s}){return(0,p.jsxs)(n.Stack,{w:e,h:e,justifyContent:"center",alignItems:"center","data-sentry-element":"Stack","data-sentry-component":"WalletAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx",children:[(0,p.jsx)(WalletAvatarBase,{size:e,img:t,wallet:s,"data-sentry-element":"WalletAvatarBase","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/WalletAvatar/WalletAvatar.tsx"}),"connected"===r?(0,p.jsx)(n.Stack,{position:"absolute",bottom:-2,right:-2,bg:"$bgSidebar",p:"$0.5",borderRadius:"$full",zIndex:"$1",children:(0,p.jsx)(n.Stack,{borderRadius:"$full",w:"$2.5",h:"$2.5",bg:"$bgSuccessStrong"})}):null,o()(a)?null:(0,p.jsx)(n.Stack,{position:"absolute",h:"$4",px:"$0.5",justifyContent:"center",bottom:-2,right:-1,bg:"$bgSubdued",borderRadius:"$full",zIndex:"$1",children:(0,p.jsx)(n.SizableText,{size:"$bodySm",textAlign:"center",children:a})})]})}},326745:(e,r,a)=>{a.d(r,{u:()=>useAppRoute});var t=a(654266);function useAppRoute(){return(0,t.lq)()}},973066:(e,r,a)=>{a.d(r,{i:()=>FirmwareChangeLogContentView,z:()=>FirmwareChangeLogView});var t=a(586330),o=a(514041),n=a(908867),s=a(490343),i=a(547669),p=a(471169),d=a(334439),l=a(773831),c=a(225555),m=a(355422),u=a(443791),g=a(831085);function ChangeLogMarkdown({changelog:e}){var[{locale:r}]=(0,p.useSettingsPersistAtom)(),[a,n]=(0,o.useState)(r);return(0,o.useEffect)((function(){(0,t.A)((function*(){"system"===r&&n(yield i.A.serviceSetting.getCurrentLocale())}))()}),[r]),(0,g.jsx)(s.Markdown,{"data-sentry-element":"Markdown","data-sentry-component":"ChangeLogMarkdown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:e?.["zh-CN"===a?"zh-CN":"en-US"]||"No change log found."})}function ChangeLogSection({title:e,icon:r,isDone:a,updateInfo:t}){var i=(0,n.A)(),[p,l]=(0,o.useState)(a),c=(0,o.useCallback)((function(){l(!p)}),[p]);return(0,g.jsxs)(s.Stack,{"data-sentry-element":"Stack","data-sentry-component":"ChangeLogSection","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:[(0,g.jsxs)(s.XStack,{gap:"$3",py:"$2",ai:"center",onPress:c,"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:[(0,g.jsx)(s.Icon,{name:r,size:"$5","data-sentry-element":"Icon","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx"}),(0,g.jsxs)(s.Stack,{flex:1,"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:[(0,g.jsx)(s.SizableText,{size:"$bodyLgMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:e}),(0,g.jsx)(s.SizableText,{size:"$bodyMd",color:a?"$textSubdued":"$textInfo","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:a?i.formatMessage({id:d.ETranslations.update_updated_to_latest_version},{version:t?.toVersion||i.formatMessage({id:d.ETranslations.global_unknown})}):i.formatMessage({id:d.ETranslations.global_version_is_available},{version:t?.toVersion||i.formatMessage({id:d.ETranslations.global_unknown})})})]}),(0,g.jsx)(s.IconButton,{icon:p?"ChevronDownSmallOutline":"ChevronTopSmallOutline",variant:"tertiary",onPress:c,"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx"})]}),p?null:(0,g.jsxs)(s.Stack,{bg:"$bgStrong",p:"$5",borderRadius:"$3",children:[(0,g.jsx)(u.Y,{fromVersion:t?.fromVersion,toVersion:t?.toVersion}),(0,g.jsx)(ChangeLogMarkdown,{changelog:t?.changelog})]})]})}function FirmwareChangeLogContentView({result:e,isDone:r}){var a=(0,n.A)();return(0,g.jsxs)(s.Stack,{mt:"$8","data-sentry-element":"Stack","data-sentry-component":"FirmwareChangeLogContentView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:[e?.updateInfos?.bootloader?.hasUpgrade?(0,g.jsx)(ChangeLogSection,{title:a.formatMessage({id:d.ETranslations.global_bootloader}),icon:"StorageOutline",updateInfo:e?.updateInfos?.bootloader,isDone:r}):null,e?.updateInfos?.ble?.hasUpgrade?(0,g.jsx)(ChangeLogSection,{title:a.formatMessage({id:d.ETranslations.global_bluetooth}),icon:"BluetoothOutline",updateInfo:e?.updateInfos?.ble,isDone:r}):null,e?.updateInfos?.firmware?.hasUpgrade?(0,g.jsx)(ChangeLogSection,{title:a.formatMessage({id:d.ETranslations.global_firmware}),icon:"LaunchOutline",updateInfo:e?.updateInfos?.firmware,isDone:r}):null]})}function FirmwareChangeLogView({result:e,onConfirmClick:r}){var a=(0,n.A)(),[,t]=(0,p.useFirmwareUpdateStepInfoAtom)(),{showCheckList:o}=(0,l.B)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.nv,{onConfirmText:a.formatMessage({id:d.ETranslations.update_update_now}),onConfirm:function(){t({step:p.EFirmwareUpdateSteps.showCheckList,payload:void 0}),o({result:e}),r?.()},"data-sentry-element":"FirmwareUpdatePageFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx"}),(0,g.jsxs)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx",children:[(0,g.jsx)(m.N,{result:e,"data-sentry-element":"FirmwareUpdateWalletProfile","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx"}),(0,g.jsx)(FirmwareChangeLogContentView,{result:e,"data-sentry-element":"FirmwareChangeLogContentView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareChangeLogView.tsx"})]})]})}},139499:(e,r,a)=>{a.d(r,{k:()=>FirmwareCheckingLoading});var t=a(908867),o=a(490343),n=a(334439),s=a(831085);function FirmwareCheckingLoading({connectId:e}){var r=(0,t.A)();return(0,s.jsxs)(o.Stack,{ai:"center",jc:"center",h:500,"data-sentry-element":"Stack","data-sentry-component":"FirmwareCheckingLoading","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareCheckingLoading.tsx",children:[(0,s.jsx)(o.Spinner,{size:"large","data-sentry-element":"Spinner","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareCheckingLoading.tsx"}),(0,s.jsx)(o.SizableText,{my:"$6",size:"$headingLg","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareCheckingLoading.tsx",children:r.formatMessage({id:n.ETranslations.update_checking_for_updates})}),null]})}},411252:(e,r,a)=>{a.d(r,{p:()=>FirmwareLatestVersionInstalled});var t=a(908867),o=a(490343),n=a(334439),s=a(831085);function FirmwareLatestVersionInstalled(){var e=(0,t.A)();return(0,s.jsxs)(o.Stack,{ai:"center",jc:"center",h:500,"data-sentry-element":"Stack","data-sentry-component":"FirmwareLatestVersionInstalled","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareLatestVersionInstalled.tsx",children:[(0,s.jsx)(o.Icon,{size:"$14",name:"CheckRadioSolid",color:"$iconSuccess","data-sentry-element":"Icon","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareLatestVersionInstalled.tsx"}),(0,s.jsx)(o.SizableText,{my:"$6",size:"$headingLg","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareLatestVersionInstalled.tsx",children:e.formatMessage({id:n.ETranslations.update_latest_version})})]})}},723337:(e,r,a)=>{a.d(r,{u:()=>FirmwareUpdateBaseMessageView});var t=a(514041),o=a(908867),n=a(490343),s=a(726130),i=a(334439),p=(a(663522),a(831085)),getColors=function(e){switch(e){case"destructive":return{iconWrapperBg:"$bgCritical",iconColor:"$iconCritical"};case"warning":return{iconWrapperBg:"$bgCaution",iconColor:"$iconCaution"};case"success":return{iconWrapperBg:"$bgSuccess",iconColor:"$iconSuccess"};default:return{iconWrapperBg:"$bgStrong",iconColor:"$icon"}}};function UpdateErrorTroubleshooting(){var e,r=(0,o.A)();e=i.ETranslations.update_troubleshoot_connection_issues;var a=r.formatMessage({id:e,defaultMessage:"If you have any questions, please refer to the troubleshooting guide."}).split("\n");return(0,p.jsx)(n.Stack,{"data-sentry-element":"Stack","data-sentry-component":"UpdateErrorTroubleshooting","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateBaseMessageView.tsx",children:a.map((function(e,r){return e.includes("<url>")?(0,p.jsx)(n.RichSizeableText,{size:"$bodyMd",color:"$textSubdued",linkList:{url:{url:s.ks}},children:e},r):(0,p.jsx)(n.SizableText,{size:"$bodyMd",color:"$textSubdued",children:e},r)}))})}function FirmwareUpdateBaseMessageView({icon:e,title:r,tone:a,message:o,linkList:s,displayTroubleshooting:i}){var d=(0,t.useCallback)((function(){return e?.endsWith("Solid")?(0,p.jsx)(n.Icon,{name:e,size:"$14",color:getColors(a).iconColor}):(0,p.jsx)(n.Stack,{alignSelf:"flex-start",p:"$3",borderRadius:"$full",bg:getColors(a).iconWrapperBg,children:(0,p.jsx)(n.Icon,{name:e,size:"$7",color:getColors(a).iconColor})})}),[e,a]);return(0,p.jsxs)(n.Stack,{py:"$6",gap:"$5","data-sentry-element":"Stack","data-sentry-component":"FirmwareUpdateBaseMessageView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateBaseMessageView.tsx",children:[(0,p.jsxs)(n.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateBaseMessageView.tsx",children:[e?d():null,r?(0,p.jsx)(n.SizableText,{my:"$4",size:"$heading2xl",children:r}):null,o?(0,p.jsx)(n.RichSizeableText,{size:"$bodyLg",color:"$textSubdued",linkList:s,children:o}):null]}),i?(0,p.jsx)(UpdateErrorTroubleshooting,{}):null]})}},853748:(e,r,a)=>{a.d(r,{_V:()=>EnterBootModeGuide,uH:()=>x,RH:()=>useFirmwareUpdateErrors});var t=a(586330),o=a(514041),n=a(813362),s=a(908867),i=a(490343),p=a(471169),d=a(726130),l=a(319357),c=a(514527),m=a(334439),u=a(117746),g=a(100645),w=a(547669);const f=a.p+"static/media/enter-boot-guide-mini.e82812de54d81a27fd02.png";var k=a(723337),y=a(225555),h=a(831085);function CommonError({message:e,title:r,icon:a,displayTroubleshooting:t}){var o=(0,s.A)();return(0,h.jsx)(k.u,{icon:a,tone:"destructive",title:r||o.formatMessage({id:m.ETranslations.global_an_error_occurred}),message:e,displayTroubleshooting:t,"data-sentry-element":"FirmwareUpdateBaseMessageView","data-sentry-component":"CommonError","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"})}function ShouldUpdateBridge({result:e}){var r=(0,s.A)();return(0,h.jsxs)(i.Stack,{"data-sentry-element":"Stack","data-sentry-component":"ShouldUpdateBridge","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx",children:[(0,h.jsx)(k.u,{icon:"InfoCircleOutline",title:r.formatMessage({id:m.ETranslations.update_outdated_version_detected}),message:r.formatMessage({id:m.ETranslations.update_hardware_update_requires_bridge}),linkList:{url:{url:d.F3}},"data-sentry-element":"FirmwareUpdateBaseMessageView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"}),(0,h.jsx)(y.nv,{onConfirm:function(){(0,u.Dr)(d.F3)},onConfirmText:r.formatMessage({id:m.ETranslations.global_view_tutorial}),"data-sentry-element":"FirmwareUpdatePageFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"})]})}function ShouldUpdateByWeb(){var e=(0,s.A)();return(0,h.jsxs)(i.Stack,{"data-sentry-element":"Stack","data-sentry-component":"ShouldUpdateByWeb","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx",children:[(0,h.jsx)(k.u,{icon:"InfoCircleOutline",title:e.formatMessage({id:m.ETranslations.update_update_in_official_web_tool}),message:e.formatMessage({id:m.ETranslations.update_update_in_official_web_tool_desc}),linkList:{url:{url:d.BZ}},"data-sentry-element":"FirmwareUpdateBaseMessageView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"}),(0,h.jsx)(y.nv,{onConfirm:function(){(0,u.Dr)(d.BZ)},onConfirmText:e.formatMessage({id:m.ETranslations.global_visit_website}),"data-sentry-element":"FirmwareUpdatePageFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"})]})}function HowToUpdateFullResource(){var e=(0,s.A)();return(0,h.jsxs)(i.Stack,{"data-sentry-element":"Stack","data-sentry-component":"HowToUpdateFullResource","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx",children:[(0,h.jsx)(k.u,{icon:"InfoCircleOutline",title:e.formatMessage({id:m.ETranslations.update_outdated_version_detected}),message:e.formatMessage({id:m.ETranslations.update_outdated_version_detected_desc}),linkList:{url:{url:d.Kj}},"data-sentry-element":"FirmwareUpdateBaseMessageView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"}),(0,h.jsx)(y.nv,{onConfirm:function(){(0,u.Dr)(d.Kj)},onConfirmText:e.formatMessage({id:m.ETranslations.global_view_tutorial}),"data-sentry-element":"FirmwareUpdatePageFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"})]})}function EnterBootModeGuide({deviceType:e}){var r=(0,s.A)();return"mini"===e?(0,h.jsxs)(i.Stack,{mb:"$6",children:[(0,h.jsx)(i.Image,{w:353,h:224,source:f}),(0,h.jsx)(i.SizableText,{size:"$headingMd",children:r.formatMessage({id:m.ETranslations.update_manually_entering_bootloader_mode})}),(0,h.jsx)(i.SizableText,{mt:"$2",color:"$textSubdued",children:r.formatMessage({id:m.ETranslations.update_manually_entering_bootloader_mode_desc})})]}):(0,h.jsx)(i.Stack,{mb:"$6","data-sentry-element":"Stack","data-sentry-component":"EnterBootModeGuide","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx",children:(0,h.jsx)(i.RichSizeableText,{mt:"$2",linkList:{url:{url:d.zz}},"data-sentry-element":"RichSizeableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx",children:m.ETranslations.update_follow_online_tutorial_to_proceed_manually})})}function useFirmwareUpdateErrors({error:e,onRetry:r,result:a,lastFirmwareTipMessage:t}){var i=(0,s.A)(),p=i.formatMessage({id:m.ETranslations.global_retry});return(0,o.useMemo)((function(){if((0,c.R4)({error:e,code:[n.HardwareErrorCode.PinCancelled,n.HardwareErrorCode.ActionCancelled,n.HardwareErrorCode.DeviceInterruptedFromOutside]}))return{content:(0,h.jsx)(CommonError,{icon:"CrossedLargeOutline",title:i.formatMessage({id:m.ETranslations.update_operation_canceled}),message:i.formatMessage({id:m.ETranslations.update_operation_canceled_desc})}),onRetryHandler:r,retryText:p};if((0,c.R4)({error:e,code:n.HardwareErrorCode.FirmwareUpdateDownloadFailed}))return{content:(0,h.jsx)(CommonError,{icon:"DownloadOutline",title:i.formatMessage({id:m.ETranslations.update_download_failed}),message:i.formatMessage({id:m.ETranslations.update_check_connection_try_again})}),onRetryHandler:r,retryText:p};if((0,c.R4)({error:e,code:n.HardwareErrorCode.PinInvalid}))return{content:(0,h.jsx)(CommonError,{icon:"CrossedLargeOutline",message:i.formatMessage({id:m.ETranslations.hardware_invalid_pin_error})}),onRetryHandler:r,retryText:p};if((0,c.R4)({error:e,code:n.HardwareErrorCode.FirmwareUpdateManuallyEnterBoot})||(0,c.R4)({error:e,code:n.HardwareErrorCode.FirmwareUpdateAutoEnterBootFailure})||e&&t===g.rn.AutoRebootToBootloader)return{content:(0,h.jsx)(CommonError,{icon:"CrossedLargeOutline",title:i.formatMessage({id:m.ETranslations.update_manually_entering_bootloader_mode})}),detail:(0,h.jsx)(EnterBootModeGuide,{deviceType:a?.deviceType}),onRetryHandler:r,retryText:"mini"===a?.deviceType?i.formatMessage({id:m.ETranslations.update_verify_status_and_continue}):p};if((0,c.R4)({error:e,code:[n.HardwareErrorCode.BridgeNetworkError]}))return{content:(0,h.jsx)(CommonError,{icon:"CrossedLargeOutline",title:i.formatMessage({id:m.ETranslations.update_bridge_network_error}),message:i.formatMessage({id:m.ETranslations.update_unable_to_connect_to_bridge})}),onRetryHandler:r,retryText:p};if((0,c.R4)({error:e,code:[n.HardwareErrorCode.BridgeTimeoutError]}))return{content:(0,h.jsx)(CommonError,{icon:"CrossedLargeOutline",title:i.formatMessage({id:m.ETranslations.update_bridge_timeout_error}),message:i.formatMessage({id:m.ETranslations.update_connection_to_bridge_timed_out})}),onRetryHandler:r,retryText:p};if((0,c.R4)({error:e,code:[n.HardwareErrorCode.BridgeNotInstalled,l.o.NeedOneKeyBridge]}))return{content:(0,h.jsx)(k.u,{icon:"CrossedLargeOutline",tone:"destructive",title:i.formatMessage({id:m.ETranslations.update_bridge_not_installed}),message:i.formatMessage({id:m.ETranslations.update_hardware_update_requires_bridge}),linkList:{url:{url:d.F3}}}),onRetryHandler:r,retryText:p};if((0,c.R4)({error:e,code:l.o.NeedOneKeyBridgeUpgrade}))return{content:(0,h.jsx)(ShouldUpdateBridge,{result:a}),retryText:p};if((0,c.R4)({error:e,code:l.o.NeedFirmwareUpgradeFromWeb}))return{content:(0,h.jsx)(ShouldUpdateByWeb,{}),retryText:p};if((0,c.R4)({error:e,code:n.HardwareErrorCode.UseDesktopToUpdateFirmware}))return{content:(0,h.jsx)(HowToUpdateFullResource,{}),retryText:p};if(e){var o=e?.message;return 4500===e.code&&(o=i.formatMessage({id:m.ETranslations.feedback_hw_polling_time_out})),{content:(0,h.jsx)(CommonError,{icon:"CrossedLargeOutline",message:o,displayTroubleshooting:!0}),onRetryHandler:r,retryText:p}}return{content:null,retryText:p}}),[i,e,t,p,r,a])}var x={ShouldUpdateBridge,CommonError,EnterBootModeGuide,WorkflowErrors:function WorkflowErrors({onRetry:e,error:r,result:a}){var t=(0,s.A)(),{onRetryHandler:o,content:n,retryText:i}=useFirmwareUpdateErrors({error:r,onRetry:e,result:a,lastFirmwareTipMessage:void 0});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y.nv,{onConfirm:o,onConfirmText:i||t.formatMessage({id:m.ETranslations.global_retry}),"data-sentry-element":"FirmwareUpdatePageFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"}),n]})},InstallingErrors:function InstallingErrors({retryInfo:e,result:r,lastFirmwareTipMessage:a}){var n=(0,s.A)(),[,i]=(0,p.useFirmwareUpdateStepInfoAtom)(),d=(0,o.useCallback)((0,t.A)((function*(){if(!e)return null;i({step:p.EFirmwareUpdateSteps.updateStart,payload:{startAtTime:Date.now()}}),yield w.A.serviceFirmwareUpdate.retryUpdateTask({id:e?.id,connectId:r?.updatingConnectId,releaseResult:r})})),[r,e,i]),{content:l,detail:c,onRetryHandler:u,retryText:g}=useFirmwareUpdateErrors({onRetry:d,result:r,lastFirmwareTipMessage:a,error:e?.error});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y.nv,{onConfirm:u,onConfirmText:g||n.formatMessage({id:m.ETranslations.global_retry}),"data-sentry-element":"FirmwareUpdatePageFooter","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateErrors.tsx"}),l,c]})}}},336293:(e,r,a)=>{a.d(r,{X:()=>FirmwareUpdateExitPrevent,U:()=>ForceExtensionUpdatingFromExpandTab});var t=a(334025),o=a(908867),n=a(334439),s=a(514041),i=a(355931),p=a(493360),d=a(490343),l=a(663522),c=a(498356),m=a(326745),u=a(773831),g=!1;function ForceExtensionUpdatingFromExpandTab(){return function useExtensionUpdatingFromExpandTab(){var e=(0,m.u)(),r=(0,u.B)();(0,s.useEffect)((function(){l.Ay.isExtensionUiPopup&&(r.openChangeLogOfExtension(e.params),window.close())}),[r,e.params])}(),null}function FirmwareUpdateExitPrevent({shouldPreventRemove:e=!0}){var r=(0,o.A)(),a=r.formatMessage({id:n.ETranslations.update_quit_update}),m=r.formatMessage({id:n.ETranslations.update_quit_update_desc});return(0,t.Wg)(),function useModalExitPrevent({title:e,message:r,shouldPreventRemove:a=!0}){var t=(0,o.A)(),i=(0,c.A)(),p=(0,s.useCallback)((function({data:a}){g||(g=!0,d.Dialog.show({title:e,description:r,onConfirmText:t.formatMessage({id:n.ETranslations.global_quit}),onConfirm:function(){i.dispatch(a.action)},onCancelText:t.formatMessage({id:n.ETranslations.global_cancel}),onClose:function(){g=!1}}))}),[r,i,e,t]);(0,d.usePreventRemove)(a,p)}({shouldPreventRemove:e,title:a,message:m}),function useAppExitPrevent({message:e,title:r,shouldPreventExitOnAndroid:a=!0}){var t=(0,o.A)();(0,s.useEffect)((function(){if(l.Ay.isRuntimeBrowser&&!l.Ay.isExtensionUiPopup){var fn=function(r){return r.preventDefault(),r.returnValue=!0,e};return window.addEventListener("beforeunload",fn),function(){window.removeEventListener("beforeunload",fn)}}}),[e]),(0,s.useEffect)((function(){if(a){var o=p.A.addEventListener("hardwareBackPress",(function(){return i.A.alert(r,e,[{text:t.formatMessage({id:n.ETranslations.global_cancel}),onPress:function(){},style:"cancel"},{text:t.formatMessage({id:n.ETranslations.global_quit}),onPress:function(){return p.A.exitApp()}}],{cancelable:!1}),!0}));return function(){return o.remove()}}}),[e,r,t,a])}({title:a,message:m,shouldPreventExitOnAndroid:!1}),null}},225555:(e,r,a)=>{a.d(r,{nv:()=>p,oh:()=>FirmwareUpdatePageLayout});var t=a(908867),o=a(490343),n=a(334439),s=a(498356),i=a(831085);function FirmwareUpdatePageHeader(){var e=(0,t.A)();return(0,i.jsx)(o.Page.Header,{dismissOnOverlayPress:!1,title:e.formatMessage({id:n.ETranslations.update_hardware_update}),"data-sentry-element":"unknown","data-sentry-component":"FirmwareUpdatePageHeader","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdatePageLayout.tsx"})}var p=o.Page.Footer;function FirmwareUpdatePageLayout({children:e}){(0,s.A)();return(0,i.jsxs)(o.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FirmwareUpdatePageLayout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdatePageLayout.tsx",children:[(0,i.jsx)(FirmwareUpdatePageHeader,{"data-sentry-element":"FirmwareUpdatePageHeader","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdatePageLayout.tsx"}),(0,i.jsx)(o.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdatePageLayout.tsx",children:(0,i.jsx)(o.Stack,{p:"$5","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdatePageLayout.tsx",children:e})})]})}},355422:(e,r,a)=>{a.d(r,{N:()=>FirmwareUpdateWalletProfile});var t=a(908867),o=a(490343),n=a(334439),s=a(593827),i=a(831085);function DeviceAvatar({deviceType:e,size:r}){return(0,i.jsx)(s.L,{img:e||"unknown",wallet:void 0,size:r,"data-sentry-element":"WalletAvatar","data-sentry-component":"DeviceAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/DeviceAvatar/DeviceAvatar.tsx"})}function FirmwareUpdateWalletProfile({result:e}){var r=(0,t.A)();return(0,i.jsxs)(o.Stack,{onPress:function(){},"data-sentry-element":"Stack","data-sentry-component":"FirmwareUpdateWalletProfile","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateWalletProfile.tsx",children:[(0,i.jsx)(DeviceAvatar,{size:"$14",deviceType:e?.deviceType||"unknown","data-sentry-element":"DeviceAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateWalletProfile.tsx"}),(0,i.jsxs)(o.SizableText,{mt:"$5",size:"$heading2xl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateWalletProfile.tsx",children:[r.formatMessage({id:n.ETranslations.update_new_hardware_updates})," "]})]})}},296437:(e,r,a)=>{a.d(r,{Y:()=>FirmwareUpdateWarningMessage});var t=a(908867),o=a(490343),n=a(334439),s=(a(663522),a(831085));function FirmwareUpdateWarningMessage(){var e=(0,t.A)();return(0,s.jsx)(o.Alert,{type:"warning",title:e.formatMessage({id:n.ETranslations.update_keep_usb_connected_and_app_active}),fullBleed:!0,mx:"$-5","data-sentry-element":"Alert","data-sentry-component":"FirmwareUpdateWarningMessage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareUpdateWarningMessage.tsx"})}},443791:(e,r,a)=>{a.d(r,{Y:()=>FirmwareVersionProgressBar});var t=a(514041),o=a(908867),n=a(302722),s=a.n(n),i=a(490343),p=a(334439),d=a(831085);function FirmwareVersionProgressBar({fromVersion:e="",toVersion:r=""}){var a=(0,o.A)().formatMessage({id:p.ETranslations.global_unknown}),n=(0,t.useCallback)((function(e){return!!e&&(!!s().valid(e)&&!s().eq(e,"0.0.0"))}),[]);return(0,d.jsxs)(i.XStack,{gap:"$2.5",alignItems:"center","data-sentry-element":"XStack","data-sentry-component":"FirmwareVersionProgressBar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareVersionProgressBar.tsx",children:[(0,d.jsx)(i.Badge,{badgeType:"default",badgeSize:"lg","data-sentry-element":"Badge","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareVersionProgressBar.tsx",children:n(e)?e:a}),(0,d.jsx)(i.Icon,{name:"ArrowRightSolid",size:"$4","data-sentry-element":"Icon","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareVersionProgressBar.tsx"}),(0,d.jsx)(i.Badge,{badgeType:"info",badgeSize:"lg","data-sentry-element":"Badge","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/components/FirmwareVersionProgressBar.tsx",children:r?.length>0?r:a})]})}},806951:(e,r,a)=>{a.r(r),a.d(r,{default:()=>x});var t=a(586330),o=a(514041),n=a(490343),s=a(471169),i=a(16853),p=a(547669),d=a(498356),l=a(326745),c=a(911998),m=a(973066),u=a(139499),g=a(411252),w=a(853748),f=a(336293),k=a(225555),y=a(296437),h=a(831085);const x=function PageFirmwareUpdateChangeLog(){var e=(0,l.u)(),r=e?.params?.connectId,[a,x]=((0,d.A)(),(0,s.useFirmwareUpdateStepInfoAtom)()),v=(0,o.useRef)(),{result:F,run:U,isLoading:E}=(0,c.yk)((0,t.A)((function*(){try{var e=yield p.A.serviceFirmwareUpdate.checkAllFirmwareRelease({connectId:r});return e?.hasUpgrade&&x({step:s.EFirmwareUpdateSteps.showChangeLog,payload:void 0}),e}catch(e){x({step:s.EFirmwareUpdateSteps.error,payload:{error:(0,i.xm)(e)}})}})),[r,x],{watchLoading:!0}),_=(0,o.useMemo)((function(){return v.current?(0,h.jsx)(m.z,{result:v.current}):E?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.X,{}),(0,h.jsx)(u.k,{connectId:r})]}):a.step===s.EFirmwareUpdateSteps.error?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y.Y,{}),(0,h.jsx)(f.X,{}),(0,h.jsx)(w.uH.WorkflowErrors,{error:a.payload.error,onRetry:U,result:F})]}):a.step===s.EFirmwareUpdateSteps.showChangeLog||a.step===s.EFirmwareUpdateSteps.showCheckList?(0,h.jsx)(m.z,{result:F,onConfirmClick:function(){v.current=F}}):(0,h.jsx)(g.p,{})}),[r,E,F,U,a.payload,a.step]);return(0,h.jsx)(n.Page,{scrollEnabled:!0,onUnmounted:(0,t.A)((function*(){yield p.A.serviceFirmwareUpdate.exitUpdateWorkflow()})),"data-sentry-element":"Page","data-sentry-component":"PageFirmwareUpdateChangeLog","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/pages/PageFirmwareUpdateChangeLog.tsx",children:(0,h.jsxs)(k.oh,{"data-sentry-element":"FirmwareUpdatePageLayout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/pages/PageFirmwareUpdateChangeLog.tsx",children:[(0,h.jsx)(f.U,{"data-sentry-element":"ForceExtensionUpdatingFromExpandTab","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/FirmwareUpdate/pages/PageFirmwareUpdateChangeLog.tsx"}),_]})})}},334025:(e,r,a)=>{a.d(r,{Wg:()=>useKeepAwake});var t,o=a(586330),n=a(72631),s=a(514041),i=a(683180),p=a(34546);!function(e){e.RELEASE="release"}(t||(t={}));var d={};const l={isAvailableAsync:()=>(0,o.A)((function*(){return!!i.A.isDOMAvailable&&"wakeLock"in navigator}))(),activate:e=>(0,o.A)((function*(){if(i.A.isDOMAvailable){var r=yield navigator.wakeLock.request("screen");d[e]=r}}))(),deactivate:e=>(0,o.A)((function*(){if(i.A.isDOMAvailable){if(!d[e])throw new p.A("ERR_KEEP_AWAKE_TAG_INVALID",`The wake lock with tag ${e} has not activated yet`);d[e].release?.(),delete d[e]}}))(),addListenerForTag(e,r){var eventListener=function(){r({state:t.RELEASE})},a=d[e];return a&&("addEventListener"in a?a.addEventListener?.("release",eventListener):a.onrelease=eventListener),{remove:function(){var r=d[e];r&&(r.removeEventListener?r.removeEventListener("release",eventListener):r.onrelease=null)}}}};var c="ExpoKeepAwakeDefaultTag";function useKeepAwake(e=c,r){(0,s.useEffect)((function(){var a=!0;return activateKeepAwakeAsync(e).then((function(){a&&l.addListenerForTag&&r?.listener&&function addListener(e,r){if(!l.addListenerForTag)throw new n.V("ExpoKeepAwake","addListenerForTag");var a="string"==typeof e?e:c,t="function"==typeof e?e:r;return l.addListenerForTag(a,t)}(e,r.listener)})),function(){a=!1,r?.suppressDeactivateWarnings?deactivateKeepAwake(e).catch((function(){})):deactivateKeepAwake(e)}}),[e])}function activateKeepAwakeAsync(){return _activateKeepAwakeAsync.apply(this,arguments)}function _activateKeepAwakeAsync(){return(_activateKeepAwakeAsync=(0,o.A)((function*(e=c){yield l.activate?.(e)}))).apply(this,arguments)}function deactivateKeepAwake(){return _deactivateKeepAwake.apply(this,arguments)}function _deactivateKeepAwake(){return(_deactivateKeepAwake=(0,o.A)((function*(e=c){yield l.deactivate?.(e)}))).apply(this,arguments)}}}]);
//# sourceMappingURL=27002.474169a5db.chunk.js.map