!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="94068bc6-d284-4e00-9755-b4658be80b06",e._sentryDebugIdIdentifier="sentry-dbid-94068bc6-d284-4e00-9755-b4658be80b06")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[75461],{175461:(e,t,n)=>{n.r(t),n.d(t,{V4MigrationProcess:()=>V4MigrationProcess,default:()=>b});var r=n(586330),o=n(514041),a=n(654266),i=n(908867),s=n(490343),c=n(547669),p=n(498356),l=n(615111),u=n(334439),g=n(193068),d=n(584186),f=n(774614),m=n(883085),y=n(60406),v=n(831085);function V4MigrationProgressBar(){var e,t=(0,i.A)(),[n]=(0,l.Z9)(),r=null!=(e=n?.progress)?e:0;return(0,v.jsxs)(s.Stack,{flex:1,alignItems:"center",justifyContent:"center",alignSelf:"center",w:"100%",maxWidth:"$80","data-sentry-element":"Stack","data-sentry-component":"V4MigrationProgressBar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx",children:[(0,v.jsx)(s.Progress,{w:"100%",size:"medium",value:r,"data-sentry-element":"Progress","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx"}),(0,v.jsx)(s.SizableText,{mt:"$5",size:"$bodyLg",textAlign:"center","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx",children:t.formatMessage({id:u.ETranslations.global_pct_complete},{ptc:r})})]})}function V4MigrationProcess({route:e}){var t=(0,p.A)(),n=(0,i.A)(),[l,b]=(0,o.useState)(!1),{serviceV4Migration:w}=c.A,[M,k]=(0,o.useState)(!0),x=(0,o.useCallback)((0,r.A)((function*(){if(!l)try{b(!0);yield w.startV4MigrationFlow();k(!1),yield d.A.wait(300),t.dispatch(a.y9.replace(g.xl.V4MigrationDone,void 0))}finally{b(!1)}})),[l,t,w]);return(0,v.jsxs)(m.l,{scrollEnabled:!1,exitPreventMode:M?y.yN.always:y.yN.disabled,onMounted:x,"data-sentry-element":"V4MigrationModalPage","data-sentry-component":"V4MigrationProcess","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx",children:[(0,v.jsx)(s.Page.Header,{headerBackTitle:void 0,headerBackVisible:!1,headerRight:f.h,headerTitle:n.formatMessage({id:u.ETranslations.v4_migration_update_in_progress}),disableClose:!0,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx"}),(0,v.jsxs)(s.Page.Body,{py:"$2.5",px:"$5",gap:"$5",flex:1,alignItems:"center",justifyContent:"center","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx",children:[(0,v.jsx)(f.U,{alignSelf:"stretch","data-sentry-element":"V4MigrationLogCopy","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx",children:(0,v.jsx)(s.Alert,{type:"warning",title:n.formatMessage({id:u.ETranslations.v4_migration_update_in_progress_alert_title}),description:n.formatMessage({id:u.ETranslations.v4_migration_update_in_progress_alert_description}),"data-sentry-element":"Alert","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx"})}),(0,v.jsx)(V4MigrationProgressBar,{"data-sentry-element":"V4MigrationProgressBar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/V4MigrationProcess.tsx"})]})]})}const b=V4MigrationProcess},774614:(e,t,n)=>{n.d(t,{U:()=>V4MigrationLogCopy,h:()=>V4MigrationLogCopyHeaderRight});var r=n(324586),o=n(839850),a=n(490343),i=n(518736),s=(n(663522),n(621591)),c=n(831085),p=["children"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V4MigrationLogCopy(e){var{children:t}=e,n=(0,o.A)(e,p),r=(0,s.D)();return(0,c.jsx)(i.P,_objectSpread(_objectSpread({},n),{},{onPress:function(){r.copyV4MigrationLogs()},"data-sentry-element":"MultipleClickStack","data-sentry-component":"V4MigrationLogCopy","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/components/V4MigrationLogCopy.tsx",children:t}))}function V4MigrationLogCopyHeaderRight(){return(0,c.jsx)(V4MigrationLogCopy,{"data-sentry-element":"V4MigrationLogCopy","data-sentry-component":"V4MigrationLogCopyHeaderRight","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/components/V4MigrationLogCopy.tsx",children:(0,c.jsx)(a.Stack,{w:"$8",h:"$8",backgroundColor:void 0,"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/components/V4MigrationLogCopy.tsx"})})}},883085:(e,t,n)=>{n.d(t,{l:()=>V4MigrationModalPage});var r=n(324586),o=n(586330),a=n(839850),i=n(514041),s=n(490343),c=n(153763),p=n(471169),l=n(60406),u=n(831085),g=["children","onMounted","exitPreventMode","isAutoStartOnMount"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V4MigrationModalPage(e){var{children:t,onMounted:n,exitPreventMode:r=l.yN.confirm,isAutoStartOnMount:d}=e,f=(0,a.A)(e,g),m=(0,i.useRef)(null),y=(0,c.E)();return(0,l.ek)({exitPreventMode:r,isAutoStartOnMount:d}),(0,i.useEffect)((function(){y&&clearTimeout(m.current)}),[y]),(0,u.jsx)(s.Page,_objectSpread(_objectSpread({scrollEnabled:!0,onMounted:(0,o.A)((function*(){yield p.v4migrationAtom.set((function(e){return _objectSpread(_objectSpread({},e),{},{isMigrationModalOpen:!0})})),n?.()})),onUnmounted:function(){},onClose:function(){}},f),{},{"data-sentry-element":"Page","data-sentry-component":"V4MigrationModalPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/components/V4MigrationModalPage.tsx",children:t}))}},60406:(e,t,n)=>{n.d(t,{EE:()=>useIsV4MigrationAutoStartFirstTime,ek:()=>useV4MigrationExitPrevent,yN:()=>b});var r=n(324586),o=n(514041),a=n(334025),i=n(908867),s=n(355931),c=n(493360),p=n(490343),l=n(498356),u=n(153763),g=n(471169),d=n(334439),f=n(663522),m=n(621591),y=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=!1,b=function(e){return e.always="always",e.confirm="confirm",e.disabled="disabled",e}({});function ModalExitPreventDialogContent({message:e,onCancelText:t,onConfirmText:n,preventRemoveData:r,isAutoStartOnMount:a}){var s=(0,i.A)(),c=(0,l.A)(),[u,f]=(0,g.useV4migrationPersistAtom)(),[m,v]=(0,o.useState)(!1);return(0,y.jsxs)(p.Stack,{"data-sentry-element":"Stack","data-sentry-component":"ModalExitPreventDialogContent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/hooks/useV4MigrationExitPrevent.tsx",children:[(0,y.jsx)(p.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/hooks/useV4MigrationExitPrevent.tsx",children:e}),a&&(u?.v4migrationAutoStartCount||0)>=3?(0,y.jsx)(p.Stack,{children:(0,y.jsx)(p.Checkbox,{value:m,onChange:function(){return v(!m)},label:s.formatMessage({id:d.ETranslations.v4_migration_exit_migration_checkbox_label})})}):null,(0,y.jsx)(p.Dialog.Footer,{onConfirmText:n,onConfirm:function(){c.dispatch(r.action),m&&f((function(e){return _objectSpread(_objectSpread({},e),{},{v4migrationAutoStartDisabled:!0})}))},onCancelText:t,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Onboarding/pages/V4Migration/hooks/useV4MigrationExitPrevent.tsx"})]})}function useIsV4MigrationAutoStartFirstTime(){var[e]=(0,g.useV4migrationPersistAtom)();return!e.v4migrationAutoStartDisabled&&(!e?.v4migrationAutoStartCount||e?.v4migrationAutoStartCount<=1)}function useV4MigrationExitPrevent({exitPreventMode:e,isAutoStartOnMount:t}){var n=(0,i.A)(),r=n.formatMessage({id:d.ETranslations.confirm_exit_dialog_title}),l=n.formatMessage({id:d.ETranslations.confirm_exit_dialog_desc}),g=n.formatMessage({id:d.ETranslations.global_exit}),w=n.formatMessage({id:d.ETranslations.global_cancel}),M=useIsV4MigrationAutoStartFirstTime();(0,a.Wg)(),function useModalExitPrevent({exitPreventMode:e,isAutoStartOnMount:t,title:n,message:r,onConfirmText:a,onCancelText:i}){var s=(0,u.E)(),c=(0,o.useCallback)((function({data:e}){v||(v=!0,p.Dialog.show({title:n,renderContent:(0,y.jsx)(ModalExitPreventDialogContent,{onCancelText:i,onConfirmText:a,preventRemoveData:e,message:r,isAutoStartOnMount:t}),onClose:function(){v=!1}}))}),[t,r,i,a,n]),l=e!==b.disabled&&s,g=e===b.confirm?c:function(){return null};(0,p.usePreventRemove)(l,g)}({exitPreventMode:M&&e===b.confirm?b.always:e,isAutoStartOnMount:t,title:r,message:l,onConfirmText:g,onCancelText:w}),function useAppExitPrevent({message:e,title:t}){var n=(0,i.A)();(0,o.useEffect)((function(){if(f.Ay.isRuntimeBrowser&&!f.Ay.isExtensionUiPopup){var fn=function(t){return t.preventDefault(),t.returnValue=!0,e};return window.addEventListener("beforeunload",fn),function(){window.removeEventListener("beforeunload",fn)}}}),[e]),(0,o.useEffect)((function(){var r=c.A.addEventListener("hardwareBackPress",(function(){return s.A.alert(t,e,[{text:n.formatMessage({id:d.ETranslations.global_cancel}),onPress:function(){},style:"cancel"},{text:n.formatMessage({id:d.ETranslations.global_quit}),onPress:function(){return c.A.exitApp()}}],{cancelable:!1}),!0}));return function(){return r.remove()}}),[e,t,n])}({title:r,message:l}),function useExtensionV4MigrationFromExpandTab(){var e=(0,m.D)();(0,o.useEffect)((function(){f.Ay.isExtensionUiPopup&&(e.openV4MigrationOfExtension(),window.close())}),[e])}()}},334025:(e,t,n)=>{n.d(t,{Wg:()=>useKeepAwake});var r,o=n(586330),a=n(72631),i=n(514041),s=n(683180),c=n(34546);!function(e){e.RELEASE="release"}(r||(r={}));var p={};const l={isAvailableAsync:()=>(0,o.A)((function*(){return!!s.A.isDOMAvailable&&"wakeLock"in navigator}))(),activate:e=>(0,o.A)((function*(){if(s.A.isDOMAvailable){var t=yield navigator.wakeLock.request("screen");p[e]=t}}))(),deactivate:e=>(0,o.A)((function*(){if(s.A.isDOMAvailable){if(!p[e])throw new c.A("ERR_KEEP_AWAKE_TAG_INVALID",`The wake lock with tag ${e} has not activated yet`);p[e].release?.(),delete p[e]}}))(),addListenerForTag(e,t){var eventListener=function(){t({state:r.RELEASE})},n=p[e];return n&&("addEventListener"in n?n.addEventListener?.("release",eventListener):n.onrelease=eventListener),{remove:function(){var t=p[e];t&&(t.removeEventListener?t.removeEventListener("release",eventListener):t.onrelease=null)}}}};var u="ExpoKeepAwakeDefaultTag";function useKeepAwake(e=u,t){(0,i.useEffect)((function(){var n=!0;return activateKeepAwakeAsync(e).then((function(){n&&l.addListenerForTag&&t?.listener&&function addListener(e,t){if(!l.addListenerForTag)throw new a.V("ExpoKeepAwake","addListenerForTag");var n="string"==typeof e?e:u,r="function"==typeof e?e:t;return l.addListenerForTag(n,r)}(e,t.listener)})),function(){n=!1,t?.suppressDeactivateWarnings?deactivateKeepAwake(e).catch((function(){})):deactivateKeepAwake(e)}}),[e])}function activateKeepAwakeAsync(){return _activateKeepAwakeAsync.apply(this,arguments)}function _activateKeepAwakeAsync(){return(_activateKeepAwakeAsync=(0,o.A)((function*(e=u){yield l.activate?.(e)}))).apply(this,arguments)}function deactivateKeepAwake(){return _deactivateKeepAwake.apply(this,arguments)}function _deactivateKeepAwake(){return(_deactivateKeepAwake=(0,o.A)((function*(e=u){yield l.deactivate?.(e)}))).apply(this,arguments)}}}]);
//# sourceMappingURL=75461.4bb4d50ff8.chunk.js.map