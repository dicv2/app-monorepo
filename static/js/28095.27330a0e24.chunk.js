!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=(new e.Error).stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6014d318-a73b-4799-90df-5388ccefc784",e._sentryDebugIdIdentifier="sentry-dbid-6014d318-a73b-4799-90df-5388ccefc784")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[28095],{49139:(e,o,t)=>{t.d(o,{A:()=>BackupDeviceList});var n=t(324586),r=t(586330),a=t(839850),s=t(514041),i=t(187753),c=t(908867),p=t(490343),d=t(547669),u=t(791088),l=t(498356),m=t(911998),k=t(153763),g=t(471169),b=t(334439),f=t(193068),y=t(567807),w=t(903469),v=t(831085),h=["ListEmptyComponent"];function ownKeys(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?ownKeys(Object(t),!0).forEach((function(o){(0,n.A)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function BackupDeviceList(e){var o,{ListEmptyComponent:t}=e,n=(0,a.A)(e,h),j=(0,c.A)(),[{isEnabled:x,isInProgress:S}]=(0,g.useCloudBackupPersistAtom)(),_=(0,l.A)(),B=(0,s.useMemo)((function(){return{iOS:"PhoneOutline",Android:"PhoneOutline",iPadOS:"SuqarePlaceholderOutline"}}),[]),{result:A,run:O}=(0,m.yk)((0,r.A)((function*(){var e=yield d.A.serviceCloudBackup.getBackupDeviceList();return t||x?e.map((function(e){return{deviceName:e.deviceInfo.deviceName,osName:e.deviceInfo.osName,detail:j.formatMessage({id:b.ETranslations.backup_updated_time},{time:(0,y.Yq)(new Date(e.backupTime))}),icon:e.deviceInfo.osName in B?B[e.deviceInfo.osName]:"SuqarePlaceholderOutline",isCurrentDevice:e.deviceInfo.deviceName===i.g7&&e.deviceInfo.osName===i.wH}})):[]})),[j,B,t,x]),C=(null!=(o=A?.length)?o:0)>0,P=(0,k.E)();return(0,s.useEffect)((function(){S||P&&O()}),[S,P,O,x]),A?(0,v.jsx)(p.SectionList,_objectSpread(_objectSpread({sections:C?[{data:A}]:[],renderSectionHeader:function(){return t||x?(0,v.jsx)(p.SectionList.SectionHeader,{mt:"$5",title:j.formatMessage({id:b.ETranslations.backup_all_devices})}):null},renderItem:function({item:e}){return(0,v.jsx)(u.c,{onPress:function(){_.pushModal(f.ry.CloudBackupModal,{screen:f.pc.CloudBackupList,params:{deviceInfo:e}})},renderItemText:function(o){return(0,v.jsx)(u.c.Text,_objectSpread(_objectSpread({},o),{},{primary:(0,v.jsxs)(p.XStack,{alignItems:"center",children:[(0,v.jsx)(p.SizableText,{size:"$bodyLgMedium",children:e.deviceName}),e.isCurrentDevice?(0,v.jsx)(p.Stack,{ml:"$1",bg:"$bgInfo",px:"$2",py:"$0.5",borderRadius:"$1",children:(0,v.jsx)(p.SizableText,{size:"$bodySmMedium",color:"$textInfo",children:j.formatMessage({id:b.ETranslations.global_current})})}):null]})}))},subtitle:e.detail,icon:e.icon,iconProps:{bg:"$bgStrong",p:"$5"},renderIcon:(0,v.jsx)(p.Stack,{bg:"$bgStrong",p:"$2",borderRadius:"$3",children:(0,v.jsx)(p.Icon,{name:e.icon,size:"$6",color:"$icon"})}),drillIn:!0})},estimatedItemSize:"$16",ListFooterComponent:!C&&t?null:(0,v.jsx)(p.SizableText,{size:"$bodySm",color:"$textSubdued",px:"$5",pt:"$3",children:j.formatMessage({id:b.ETranslations.backup_onekey_doesnt_back_up_hardware_wallets})}),ListEmptyComponent:t},n),{},{"data-sentry-element":"SectionList","data-sentry-component":"BackupDeviceList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/components/BackupDeviceList.tsx"})):(0,v.jsx)(w.A,{})}},903469:(e,o,t)=>{t.d(o,{A:()=>BackupListLoading});var n=t(490343),r=t(831085);function BackupListLoading(){return(0,r.jsxs)(n.Stack,{flex:1,px:"$5",gap:"$2",pt:"$5","data-sentry-element":"Stack","data-sentry-component":"BackupListLoading","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/components/BackupListLoading.tsx",children:[(0,r.jsx)(n.Skeleton,{h:"$6",w:"70%","data-sentry-element":"Skeleton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/components/BackupListLoading.tsx"}),(0,r.jsx)(n.Skeleton,{h:"$6",w:"100%","data-sentry-element":"Skeleton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/components/BackupListLoading.tsx"}),(0,r.jsx)(n.Skeleton,{h:"$6",w:"70%","data-sentry-element":"Skeleton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/components/BackupListLoading.tsx"}),(0,r.jsx)(n.Skeleton,{h:"$6",w:"100%","data-sentry-element":"Skeleton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/components/BackupListLoading.tsx"})]})}},928095:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Home});var n=t(586330),r=t(514041),a=t(908867),s=t(490343),i=t(547669),c=t(791088),p=t(498356),d=t(471169),u=t(334439),l=t(875998),m=t(663522),k=t(49139),g=t(324586),b=(t(584186),t(833800)),f=t(831085);function ownKeys(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?ownKeys(Object(t),!0).forEach((function(o){(0,g.A)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function useBackupToggleAction(){var e,o=(0,b.S)(),t=(0,r.useCallback)((e=(0,n.A)((function*(e,t){e&&(yield o.check()),yield d.cloudBackupPersistAtom.set(_objectSpread(_objectSpread({},yield d.cloudBackupPersistAtom.get()),{},{isEnabled:e},e?{isFirstEnabled:!1,isInProgress:!0}:{isFirstDisabled:!1,isInProgress:!1})),!e&&m.Ay.isNativeAndroid&&(yield i.A.serviceCloudBackup.logoutFromGoogleDrive(!0)),t?.(e)})),function(o,t){return e.apply(this,arguments)}),[o]);return(0,r.useMemo)((function(){return{toggle:t}}),[t])}function Home(){var e=(0,a.A)(),o=function useBackupToggleDialog(){var e,o=(0,a.A)(),t=useBackupToggleAction(),s=(0,r.useCallback)((e=(0,n.A)((function*(e){})),function(o){return e.apply(this,arguments)}),[o,t]);return(0,r.useMemo)((function(){return{maybeShow:s}}),[s])}(),[{isEnabled:t,isInProgress:g}]=(0,d.useCloudBackupPersistAtom)(),[b,y]=(0,r.useState)(""),w=(0,p.A)(),v=(0,r.useCallback)((0,n.A)((function*(){yield o.maybeShow(!0),y("");try{yield i.A.serviceCloudBackup.backupNow()}catch(o){var e;y("Sync failed, please retry."),s.Toast.error({title:`${null!=(e=o?.message)?e:o}`})}l.U.setting.page.backup({backupMethod:m.Ay.isNativeAndroid?"Google":"iCloud"})})),[o]),h=(0,r.useCallback)((function(){return g?(0,f.jsx)(s.Button,{disabled:!0,bg:"transparent",p:"0",loading:!0,children:e.formatMessage({id:u.ETranslations.global_syncing})}):b?(0,f.jsx)(s.Button,{disabled:!0,bg:"transparent",p:"0",icon:"XCircleSolid",iconColor:"$iconCritical",children:e.formatMessage({id:u.ETranslations.global_sync_error})}):(0,f.jsx)(s.Button,{disabled:!0,bg:"transparent",p:"0",icon:"CheckRadioSolid",iconColor:"$iconSuccess",children:e.formatMessage({id:u.ETranslations.global_synced})})}),[e,g,b]);return(0,f.jsxs)(s.Page,{"data-sentry-element":"Page","data-sentry-component":"Home","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/pages/Home/index.tsx",children:[(0,f.jsx)(s.Page.Header,{title:e.formatMessage({id:m.Ay.isNativeAndroid?u.ETranslations.settings_google_drive_backup:u.ETranslations.settings_icloud_backup}),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/pages/Home/index.tsx"}),(0,f.jsxs)(s.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/pages/Home/index.tsx",children:[(0,f.jsx)(k.A,{ListHeaderComponent:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.c,{title:e.formatMessage({id:m.Ay.isNativeAndroid?u.ETranslations.backup_backup_to_google_drive:u.ETranslations.backup_backup_to_icloud}),children:(0,f.jsx)(s.Stack,{pointerEvents:"box-only",onPress:(0,n.A)((function*(){yield o.maybeShow(!t),t?m.Ay.isNativeAndroid&&w.pop():yield v()})),children:(0,f.jsx)(s.Switch,{value:t})})}),t?(0,f.jsx)(c.c,{pt:"$3",title:e.formatMessage({id:m.Ay.isNativeAndroid?u.ETranslations.backup_google_drive_status:u.ETranslations.backup_icloud_status}),children:h()}):null,(0,f.jsx)(s.Divider,{pt:"$6"})]}),"data-sentry-element":"BackupDeviceList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/pages/Home/index.tsx"}),(0,f.jsx)(s.Stack,{m:"$5","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/pages/Home/index.tsx",children:(0,f.jsx)(s.Button,{mt:"$4",borderRadius:"$3",py:"$3",disabled:g,onPress:v,"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/CloudBackup/pages/Home/index.tsx",children:e.formatMessage({id:u.ETranslations.backup_backup_now})})})]})]})}}}]);
//# sourceMappingURL=28095.27330a0e24.chunk.js.map