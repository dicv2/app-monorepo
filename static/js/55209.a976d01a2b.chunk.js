!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e8ecf46f-83dd-4bf3-98de-95bc3105e418",e._sentryDebugIdIdentifier="sentry-dbid-e8ecf46f-83dd-4bf3-98de-95bc3105e418")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[55209],{455209:(e,t,o)=>{o.r(t),o.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=o(514041),r=o(490343),n=o(654004),a=o(831085);function ProgressDemo(){var[e,t]=(0,s.useState)(0);return(0,a.jsxs)(r.YStack,{gap:"$2","data-sentry-element":"YStack","data-sentry-component":"ProgressDemo","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Progress.tsx",children:[(0,a.jsx)(r.Progress,{value:e,"data-sentry-element":"Progress","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Progress.tsx"}),(0,a.jsx)(r.Button,{onPress:function(){t(e+10)},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Progress.tsx",children:"Increase"})]})}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,a.jsx)(n.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,a.jsx)(ProgressDemo,{})},{title:"0",element:(0,a.jsxs)(r.YStack,{gap:"$2",children:[(0,a.jsx)(r.Progress,{value:0}),(0,a.jsx)(r.Progress,{value:.1}),(0,a.jsx)(r.Progress,{value:60}),(0,a.jsx)(r.Progress,{value:80}),(0,a.jsx)(r.Progress,{value:100})]})}],"data-sentry-element":"Layout","data-sentry-component":"ProgressGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Progress.tsx"})}},654004:(e,t,o)=>{o.d(t,{P:()=>Layout});var s=o(586330),r=o(654266),n=o(490343),a=o(989375),l=o(547669),i=o(498356),p=o(193068),c=o(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(n.Stack,{children:(0,c.jsxs)(n.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(n.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(n.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,o){return(0,c.jsx)(n.Stack,{children:(0,c.jsxs)(n.SizableText,{children:[o+1,". ",t,o===e.length-1?"。":"；"]})},o.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:o=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:g=!1,children:y}){var k=(0,a.U6)(),x=(0,i.A)();return(0,c.jsx)(n.Page,{skipLoading:g,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(n.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:k,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(n.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(n.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(n.IconButton,{icon:"HomeLineOutline",onPress:function(){x.dispatch(r.y9.replace(p.WP.Main,{screen:p.V4.Developer,params:{screen:p.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(n.Button,{ml:"$4",onPress:(0,s.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(n.Button,{ml:"$4",variant:"primary",onPress:(0,s.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(n.Stack,{gap:"$2",children:[(0,c.jsx)(n.Stack,{children:(0,c.jsx)(n.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(n.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(n.Stack,{gap:"$2",children:[(0,c.jsx)(n.Stack,{children:(0,c.jsx)(n.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,o?.length>0?(0,c.jsxs)(n.Stack,{gap:"$2",children:[(0,c.jsx)(n.Stack,{children:(0,c.jsx)(n.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:o})]}):null,(0,c.jsxs)(n.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(n.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(n.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(n.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(n.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(n.Stack,{flexDirection:"column",children:[(0,c.jsx)(n.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(n.Stack,{paddingTop:1,children:(0,c.jsxs)(n.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(n.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(n.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:y?(0,c.jsx)(n.Stack,{gap:"$3",children:y}):null})]})]})})})}}}]);
//# sourceMappingURL=55209.a976d01a2b.chunk.js.map