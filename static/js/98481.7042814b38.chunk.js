!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ba33e131-bec7-4d86-93ba-a92ca90a600c",e._sentryDebugIdIdentifier="sentry-dbid-ba33e131-bec7-4d86-93ba-a92ca90a600c")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[98481],{998481:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(514041);function DAppConnectExtensionFloatingTrigger(){return null}var o=t(396304),i=t(714191),a=t(325809),s=t(989840),c=(t(162616),t(579071)),u=t.n(c),f=t(471169),l=t(547669),p=t(153763),g=t(831085);function NotificationRegisterDaily(){var e=(0,p.E)(),[{locale:n,currencyInfo:t}]=(0,f.useSettingsPersistAtom)(),[{hideValue:o}]=(0,f.useSettingsValuePersistAtom)(),i=(0,r.useRef)(!0);return(0,r.useEffect)((function(){i.current||e&&l.A.serviceNotification.registerClientDaily()}),[e]),(0,r.useEffect)((function(){i.current?i.current=!1:(u()(n,t,o),l.A.serviceNotification.updateClientBasicAppInfo())}),[n,t,o]),(0,g.jsx)(g.Fragment,{})}var d=t(471230),m=t(165613);const y=(0,s.we)((function HomePageContainer(){var[e,n]=(0,r.useState)(!1);if((0,o.eX)({name:"HomePageContainer"}),e)return null;var t=i.Zs.home;return(0,g.jsxs)(a.b8,{config:{sceneName:t,sceneUrl:""},enabledNum:[0],"data-sentry-element":"AccountSelectorProviderMirror","data-sentry-component":"HomePageContainer","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Home/pages/HomePageContainer.tsx",children:[(0,g.jsx)(m.U,{sceneName:t,onPressHide:function(){return n((function(e){return!e}))},"data-sentry-element":"HomePageView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Home/pages/HomePageContainer.tsx"},t),(0,g.jsx)(DAppConnectExtensionFloatingTrigger,{"data-sentry-element":"DAppConnectExtensionFloatingTrigger","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Home/pages/HomePageContainer.tsx"}),(0,g.jsx)(d.YG,{"data-sentry-element":"OnboardingOnMount","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Home/pages/HomePageContainer.tsx"}),(0,g.jsx)(NotificationRegisterDaily,{"data-sentry-element":"NotificationRegisterDaily","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Home/pages/HomePageContainer.tsx"}),null]})}))},471230:(e,n,t)=>{t.d(n,{YG:()=>w,U9:()=>o.U});t(490343),t(791088),t(193068);var r=t(498356);t(831085);var o=t(952954),i=t(324586),a=t(586330),s=t(514041),c=t(471169),u=t(318822),f=(t(334439),t(663522)),l=t(584186),p=t(547669),g=t(131397),d=t(621591);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){(0,i.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=0,y=!1,b=!1;var w=(0,s.memo)((function OnboardingOnMountCmp(){var e=(0,g.t1)(),n=(0,r.A)(),t=(0,d.D)(),[o,i]=(0,c.useV4migrationPersistAtom)(),w=o?.downgradeWarningConfirmed;(0,s.useRef)(w).current=w;var v=(0,s.useCallback)((0,a.A)((function*(){(yield p.A.serviceV4Migration.checkShouldMigrateV4OnMount())&&(y||(y=!0,yield p.A.serviceV4Migration.migrateBaseSettings()))})),[]),k=(0,s.useCallback)((0,a.A)((function*({checkingV4Migration:n}={}){try{if(n)if(yield p.A.serviceV4Migration.checkShouldMigrateV4OnMount()){if(yield v(),yield l.A.wait(600),!b){b=!0,yield t.navigateToV4MigrationPage({isAutoStartOnMount:!0});var r=Date.now();r-m>3e3&&(m=r,i((function(e){return _objectSpread(_objectSpread({},e),{},{v4migrationAutoStartCount:(e.v4migrationAutoStartCount||0)+1})})))}return}}catch(e){}if(!(0,g.p1)()){var{isOnboardingDone:o}=yield p.A.serviceOnboarding.isOnboardingDone();o||f.Ay.isWebDappMode||e({isFullModal:!0})}})),[v,i,e,t]),O=(0,s.useCallback)((0,a.A)((function*(){yield k({checkingV4Migration:!0})})),[k,v,i]);return(0,s.useEffect)((function(){}),[]),(0,s.useEffect)((function(){}),[i]),(0,s.useEffect)((function(){}),[n]),(0,s.useEffect)((function(){}),[t]),(0,s.useEffect)((function(){O()}),[O]),(0,s.useEffect)((function(){var fn=function(){k({checkingV4Migration:!1})};return u.iL.on(u.Tu.WalletClear,fn),function(){u.iL.off(u.Tu.WalletClear,fn)}}),[k]),null}))}}]);
//# sourceMappingURL=98481.7042814b38.chunk.js.map