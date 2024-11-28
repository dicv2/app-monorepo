!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=(new e.Error).stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f30775d9-c893-4d57-85b3-979236b4ae52",e._sentryDebugIdIdentifier="sentry-dbid-f30775d9-c893-4d57-85b3-979236b4ae52")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[10184],{110184:(e,o,r)=>{r.r(o),r.d(o,{default:()=>Logger});var n=r(514041),t=r(490343),s=r(460627),a=r(875998),p=r(79110),i=r(324586),l=r(586330),c=r(579071),g=r.n(c),u=r(578104),d=r(373119),m=r(584186),y=r(831085);function ownKeys(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?ownKeys(Object(r),!0).forEach((function(o){(0,i.A)(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}const LoggerConfigGallery=function(){g()(a.U.account.getName());var[e,o]=(0,n.useState)(""),r=(0,n.useRef)(e);r.current=e;var[s,p]=(0,n.useState)({}),i=(0,n.useRef)(s);i.current=s;var[c,k]=(0,n.useState)({highlightDurationGt:"",enabled:{}}),h=(0,n.useRef)(c);h.current=c,(0,n.useEffect)((function(){(0,l.A)((function*(){var e=yield d.C.getSavedLoggerConfig();k(e),p(e.enabled),o(e.highlightDurationGt||"")}))()}),[]);var f=(0,u.YQ)((0,l.A)((function*(){yield m.A.wait(0),d.C.saveLoggerConfig(_objectSpread(_objectSpread({},h.current),{},{highlightDurationGt:r.current,enabled:i.current}))})),300,{leading:!1,trailing:!0}),handleChange=function(e,o){for(var r=_objectSpread({},s),n=r,t=0;t<e.length-1;t+=1)n=n[e[t]];n[e[e.length-1]]=o,p(r),f()},isGroupChecked=function(e){return Object.values(e).every((function(e){return"object"==typeof e?isGroupChecked(e):e}))},renderCheckBoxes=function(e,o=[]){return Object.entries(e).map((function([e,r]){var n=[...o,e];if("object"==typeof r){var s=isGroupChecked(r);return(0,y.jsxs)(t.YStack,{ml:"$2",children:[(0,y.jsx)(t.XStack,{alignItems:"center",children:(0,y.jsx)(t.Checkbox,{value:s,onChange:function(e){var o=_objectSpread({},r);Object.keys(o).forEach((function(r){"object"==typeof o[r]?Object.keys(o[r]).forEach((function(n){o[r][n]=e})):o[r]=e})),handleChange(n,o)},label:e,labelProps:{fontSize:"$heading3xl"}})}),renderCheckBoxes(r,n)]},e)}return(0,y.jsx)(t.XStack,{ml:"$8",alignItems:"center",children:(0,y.jsx)(t.Checkbox,{value:r,onChange:function(e){return handleChange(n,!!e)},label:e})},e)}))};return(0,y.jsxs)(t.Stack,{"data-sentry-element":"Stack","data-sentry-component":"LoggingConfigCheckbox","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LoggerConfigGallery.tsx",children:[(0,y.jsxs)(t.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LoggerConfigGallery.tsx",children:["Highlight Duration Greater Than (",c.highlightDurationGt,"ms)"]}),c.highlightDurationGt?(0,y.jsx)(t.Input,{value:e,onBlur:function(){f()},onChangeText:function(e){o(e)}}):null,(0,y.jsxs)(t.Stack,{py:"$4",flexDirection:"row",alignItems:"center",gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LoggerConfigGallery.tsx",children:[(0,y.jsx)(t.Switch,{value:c.colorfulLog,onChange:function(e){k((function(o){return _objectSpread(_objectSpread({},o),{},{colorfulLog:e})})),f()},"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LoggerConfigGallery.tsx"}),(0,y.jsx)(t.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LoggerConfigGallery.tsx",children:"Colorful log original message objects"})]}),(0,y.jsx)(t.XStack,{alignItems:"center",mb:"$4","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LoggerConfigGallery.tsx",children:(0,y.jsx)(t.Checkbox,{value:isGroupChecked(s),onChange:function(e){var o=_objectSpread({},s);Object.keys(o).forEach((function(r){"object"==typeof o[r]&&null!==o[r]?Object.keys(o[r]).forEach((function(n){o[r][n]=!!e})):o[r]=!!e})),handleChange([],o)},label:"Select All",labelProps:{fontSize:"$heading2xl",fontWeight:"bold"},"data-sentry-element":"Checkbox","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LoggerConfigGallery.tsx"})}),renderCheckBoxes(s)]})};var k=r(654004),LoggerDemo=function(){var e=(0,n.useCallback)((function(){(0,s.u)("onekey_logs")}),[]);return(0,y.jsx)(t.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-component":"LoggerDemo","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:(0,y.jsxs)(t.Accordion,{type:"multiple",defaultValue:[],"data-sentry-element":"Accordion","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:[(0,y.jsxs)(t.Accordion.Item,{value:"logging-config","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:[(0,y.jsx)(t.Accordion.Trigger,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:function({open:e}){return(0,y.jsxs)(t.SizableText,{children:["LoggingConfig ",e?"↓":"→"]})}}),(0,y.jsx)(t.Accordion.Content,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:(0,y.jsx)(LoggerConfigGallery,{"data-sentry-element":"LoggingConfigCheckbox","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx"})})]}),(0,y.jsxs)(t.Accordion.Item,{value:"logging-perf","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:[(0,y.jsx)(t.Accordion.Trigger,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:function({open:e}){return(0,y.jsxs)(t.SizableText,{children:["PerformanceTimer Log ",e?"↓":"→"]})}}),(0,y.jsx)(t.Accordion.Content,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:Object.values(p.D).map((function(e){return(0,y.jsx)(t.Checkbox,{isUncontrolled:!0,defaultChecked:p.A.getPerformanceTimerLogConfig(e),label:e,onChange:function(o){return p.A.updatePerformanceTimerLogConfig(e,!!o)}},e)}))})]}),(0,y.jsxs)(t.Accordion.Item,{value:"logging-demo","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:[(0,y.jsx)(t.Accordion.Trigger,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:function({open:e}){return(0,y.jsxs)(t.SizableText,{children:["LoggingDemo ",e?"↓":"→"]})}}),(0,y.jsxs)(t.Accordion.Content,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:[(0,y.jsx)(t.Button,{onPress:function(){return a.U.demo.math.sum(1,2)},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:"Log #1"}),(0,y.jsx)(t.Button,{onPress:function(){return a.U.demo.math.obj(1,2)},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:"Log #2"}),(0,y.jsx)(t.Button,{onPress:function(){return a.U.demo.math.arr(1,2)},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:"Log #3"}),(0,y.jsx)(t.Button,{onPress:function(){return a.U.demo.math.logSensitiveMessage(1,2)},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:"logSensitiveMessage"}),(0,y.jsx)(t.Button,{onPress:function(){return a.U.app.page.pageView("HelloWorld.".repeat(1e5))},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:"Log large content"}),(0,y.jsx)(t.Button,{onPress:function(){return a.U.discovery.browser.tabsData([{id:"1",url:"1",title:"Tab 1"}])},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:"Log Browser Tabs"}),(0,y.jsx)(t.Button,{onPress:e,"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx",children:"Download Log"})]})]})]})})};const Logger=function(){return(0,y.jsx)(k.P,{description:"",suggestions:[],boundaryConditions:[],elements:[{title:"Logger",element:(0,y.jsx)(t.Stack,{gap:"$1",children:(0,y.jsx)(LoggerDemo,{})})}],"data-sentry-element":"Layout","data-sentry-component":"LoggerGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Logger.tsx"})}},654004:(e,o,r)=>{r.d(o,{P:()=>Layout});var n=r(586330),t=r(654266),s=r(490343),a=r(989375),p=r(547669),i=r(498356),l=r(193068),c=r(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(s.Stack,{children:(0,c.jsxs)(s.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(o,r){return(0,c.jsx)(s.Stack,{children:(0,c.jsxs)(s.SizableText,{children:[r+1,". ",o,r===e.length-1?"。":"；"]})},r.toString())}))})})};function Layout({description:e="",suggestions:o=[],boundaryConditions:r=[],elements:g=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:d="never",skipLoading:m=!1,children:y}){var k=(0,a.U6)(),h=(0,i.A)();return(0,c.jsx)(s.Page,{skipLoading:m,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:k,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:d,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(s.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(s.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(s.IconButton,{icon:"HomeLineOutline",onPress:function(){h.dispatch(t.y9.replace(l.WP.Main,{screen:l.V4.Developer,params:{screen:l.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(s.Button,{ml:"$4",onPress:(0,n.A)((function*(){yield p.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(s.Button,{ml:"$4",variant:"primary",onPress:(0,n.A)((function*(){yield p.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(s.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,o?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:o})]}):null,r?.length>0?(0,c.jsxs)(s.Stack,{gap:"$2",children:[(0,c.jsx)(s.Stack,{children:(0,c.jsx)(s.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:r})]}):null,(0,c.jsxs)(s.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(s.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:g?.map((function(e,o){return(0,c.jsxs)(s.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(s.Stack,{flexDirection:"column",children:[(0,c.jsx)(s.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(s.Stack,{paddingTop:1,children:(0,c.jsxs)(s.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(s.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${o}`)}))}),(0,c.jsx)(s.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:y?(0,c.jsx)(s.Stack,{gap:"$3",children:y}):null})]})]})})})}},460627:(e,o,r)=>{r.d(o,{u:()=>i});var n,t=r(586330),s=r(547669),a=r(875998),p=r(520202),i=(n=(0,t.A)((function*(e){var o=`${e}.txt`;a.U.setting.device.logDeviceInfo(),yield(0,p.of)(1e3);var r=yield s.A.serviceLogger.getAllMsg(),n=document.createElement("a"),t=new Blob(r,{type:"text/plain",endings:"native"});n.href=URL.createObjectURL(t),n.download=o,document.body.appendChild(n),n.click()})),function exportLogs(e){return n.apply(this,arguments)})}}]);
//# sourceMappingURL=10184.a89f0640ea.chunk.js.map