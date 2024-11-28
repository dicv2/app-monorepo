!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c47410a2-854f-47eb-98df-dcbd2b76e9e0",e._sentryDebugIdIdentifier="sentry-dbid-c47410a2-854f-47eb-98df-dcbd2b76e9e0")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[45875],{145875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(586330),r=n(324586),s=n(141580),i=n.n(s),a=n(514041),l=n(578104),c=n(490343),d=n(471169),g=n(193068),u=n(212591),p=n(547669),b=n(498356),f=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const h=(0,a.memo)((function DevOverlayWindow(){var[e,t]=(0,d.useDevSettingsPersistAtom)(),n=e.enabled&&e.settings?.showDevOverlayWindow,r=(0,a.useMemo)((function(){return i()(n)?n:{top:10,align:"right"}}),[n]),s=(0,b.A)(),[h]=(0,d.usePasswordPersistAtom)(),S=(0,l.dh)((function(e){t((function(t){return _objectSpread(_objectSpread({},t),{},{settings:_objectSpread(_objectSpread({},t.settings),{},{showDevOverlayWindow:{align:(i()(t.settings?.showDevOverlayWindow)?t.settings?.showDevOverlayWindow?.align:"right")||"right",top:e}})})}))}),100),j=(0,l.YQ)((function(e){t((function(t){return _objectSpread(_objectSpread({},t),{},{settings:_objectSpread(_objectSpread({},t.settings),{},{showDevOverlayWindow:_objectSpread(_objectSpread({},i()(t.settings?.showDevOverlayWindow)?t.settings?.showDevOverlayWindow:{top:10}),{},{align:e})})})}))}),100),w=(0,a.useCallback)((function(){var e=c.Dialog.show({title:"DevOverlayWindow",showConfirmButton:!1,showCancelButton:!1,renderContent:(0,f.jsxs)(c.YStack,{gap:"$4",children:[(0,f.jsxs)(c.XStack,{gap:"$2",children:[(0,f.jsx)(c.Button,{onPress:function(){s.pushModal(g.ry.SettingModal,{screen:g.Pj.SettingListModal}),e.close()},testID:"open-settings-page",children:"Settings"}),(0,f.jsx)(c.Button,{onPress:function(){s.switchTab(g.V4.Home),e.close()},testID:"open-home-page",children:"Home"}),(0,f.jsx)(c.Button,{onPress:(0,o.A)((function*(){h.isPasswordSet||(yield p.A.servicePassword.promptPasswordVerify()),yield p.A.servicePassword.lockApp(),e.close()})),children:"Lock"})]}),(0,f.jsxs)(c.XStack,{gap:"$2",alignItems:"center",children:[(0,f.jsx)(c.SizableText,{children:"TOP"}),(0,f.jsx)(c.Stack,{flex:1,children:(0,f.jsx)(c.Slider,{min:1,max:100,step:1,defaultValue:r.top,onChange:function(e){S(e)}})})]}),(0,f.jsxs)(c.XStack,{gap:"$2",alignItems:"center",children:[(0,f.jsx)(c.SizableText,{children:"ALIGN"}),(0,f.jsx)(c.Button,{size:"small",onPress:function(){j("left")},children:"Left"}),(0,f.jsx)(c.Button,{size:"small",onPress:function(){j("right")},children:"Right"})]}),(0,f.jsxs)(c.YStack,{gap:"$2",children:[(0,f.jsxs)(c.XStack,{gap:"$2",alignItems:"center",children:[(0,f.jsx)(c.SizableText,{size:"$headingLg",onPress:function(){},children:"DB Perf Monitor"}),(0,f.jsx)(c.Stack,{flex:1}),(0,f.jsx)(c.Button,{size:"small",onPress:function(){u.A.resetAllData()},children:"重置统计数据"})]}),(0,f.jsxs)(c.XStack,{gap:"$2",alignItems:"center",children:[(0,f.jsx)(c.Tooltip,{renderTrigger:(0,f.jsx)(c.SizableText,{children:"告警"}),renderContent:(0,f.jsx)(c.SizableText,{children:"告警开启后，统计数据每隔 3 秒自动重置"})}),(0,f.jsx)(c.Switch,{isUncontrolled:!0,defaultChecked:u.A.getSettings()?.toastWarningEnabled,onChange:function(e){u.A.updateSettings({toastWarningEnabled:e})}}),(0,f.jsx)(c.Stack,{flex:1}),(0,f.jsx)(c.Tooltip,{renderTrigger:(0,f.jsx)(c.SizableText,{children:"告警阈值"}),renderContent:(0,f.jsx)(c.SizableText,{children:"当数据库调用频率超过阈值后 Toast 告警"})}),(0,f.jsx)(c.Input,{addOns:[{label:"次/3秒"}],size:"small",width:50,defaultValue:u.A.getSettings()?.toastWarningSize.toString(),onChangeText:function(e){var t=Number(e);Number.isNaN(t)||u.A.updateSettings({toastWarningSize:t})}})]}),(0,f.jsxs)(c.XStack,{gap:"$2",alignItems:"center",children:[(0,f.jsx)(c.Tooltip,{renderTrigger:(0,f.jsx)(c.SizableText,{children:"实时日志"}),renderContent:(0,f.jsx)(c.SizableText,{children:"开启数据库调用统计数据的实时日志，关闭后仅打印告警日志"})}),(0,f.jsx)(c.Switch,{isUncontrolled:!0,defaultChecked:u.A.getSettings()?.consoleLogEnabled,onChange:function(e){u.A.updateSettings({consoleLogEnabled:e})}}),(0,f.jsx)(c.Stack,{flex:1}),(0,f.jsx)(c.Tooltip,{renderTrigger:(0,f.jsx)(c.SizableText,{children:"自动断点"}),renderContent:(0,f.jsx)(c.SizableText,{children:"需代码中先配置 DebuggerRule, 当满足规则时自动断点, 方便排查函数调用栈"})}),(0,f.jsx)(c.Switch,{isUncontrolled:!0,defaultChecked:u.A.getSettings()?.debuggerEnabled,onChange:function(e){u.A.updateSettings({debuggerEnabled:e})}})]})]})]})})}),[r.top,s,h.isPasswordSet,S,j]);return n?(0,f.jsx)(c.Stack,{position:"absolute",left:"left"===r.align?0:void 0,right:"right"===r.align?0:void 0,top:`${r.top>95?95:r.top}%`,"data-sentry-element":"Stack","data-sentry-component":"DevOverlayWindow","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/provider/Container/FullWindowOverlayContainer/DevOverlayWindow.tsx",children:(0,f.jsx)(c.IconButton,{size:"small",testID:"dev-button",icon:"BugSolid",iconProps:{color:"$iconSuccess"},backgroundColor:"$bgSuccess",onPress:w,"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/provider/Container/FullWindowOverlayContainer/DevOverlayWindow.tsx"})}):null}))}}]);
//# sourceMappingURL=45875.69b2ad11a1.chunk.js.map