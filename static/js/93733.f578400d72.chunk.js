!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5ed21614-5037-47a6-a795-9738586bd6ae",e._sentryDebugIdIdentifier="sentry-dbid-5ed21614-5037-47a6-a795-9738586bd6ae")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[93733],{293733:(e,t,o)=>{o.r(t),o.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=o(514041),r=o(490343),a=o(654004),s=o(831085),PopoverDemo=function(){var[e,t]=(0,n.useState)(!1);return(0,s.jsx)(r.Popover,{title:"Popover Demo",open:e,onOpenChange:t,renderTrigger:(0,s.jsx)(r.Button,{onPress:function(){return t(!0)},children:"Open"}),renderContent:(0,s.jsxs)(r.Stack,{gap:"$4",p:"$5",children:[(0,s.jsx)(r.SizableText,{children:"Non exercitation ea laborum cupidatat sunt amet aute exercitation occaecat minim incididunt non est est voluptate."}),(0,s.jsx)(r.Button,{variant:"primary",onPress:function(){return t(!1)},children:"Button"})]}),"data-sentry-element":"Popover","data-sentry-component":"PopoverDemo","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Popover.tsx"})},Content=function(){var{closePopover:e}=(0,r.usePopoverContext)();return(0,s.jsxs)(r.Stack,{gap:"$4",p:"$5","data-sentry-element":"Stack","data-sentry-component":"Content","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Popover.tsx",children:[(0,s.jsx)(r.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Popover.tsx",children:"Non exercitation ea laborum cupidatat sunt amet aute exercitation occaecat minim incididunt non est est voluptate."}),(0,s.jsx)(r.Button,{variant:"primary",onPress:e,"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Popover.tsx",children:"Button"})]})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(a.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Controlled",element:(0,s.jsx)(PopoverDemo,{})},{title:"Uncontrolled",element:function(){return(0,s.jsx)(r.Popover,{title:"Popover Demo",renderTrigger:(0,s.jsx)(r.Button,{children:"Uncontrolled Open"}),renderContent:function({closePopover:e}){return(0,s.jsxs)(r.Stack,{gap:"$4",p:"$5",children:[(0,s.jsx)(r.SizableText,{children:"Non exercitation ea laborum cupidatat sunt amet aute exercitation occaecat minim incididunt non est est voluptate."}),(0,s.jsx)(r.Button,{variant:"primary",onPress:e,children:"Button"})]})}})}},{title:"usePopoverContext",element:function(){return(0,s.jsx)(r.Popover,{title:"Popover Demo",renderTrigger:(0,s.jsx)(r.Button,{children:"Uncontrolled Open"}),renderContent:(0,s.jsx)(Content,{})})}}],"data-sentry-element":"Layout","data-sentry-component":"PopoverGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Popover.tsx"})}},654004:(e,t,o)=>{o.d(t,{P:()=>Layout});var n=o(586330),r=o(654266),a=o(490343),s=o(989375),i=o(547669),p=o(498356),l=o(193068),c=o(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,o){return(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[o+1,". ",t,o===e.length-1?"。":"；"]})},o.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:o=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:y=!1,children:x}){var k=(0,s.U6)(),g=(0,p.A)();return(0,c.jsx)(a.Page,{skipLoading:y,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:k,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(a.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(r.y9.replace(l.WP.Main,{screen:l.V4.Developer,params:{screen:l.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(a.Button,{ml:"$4",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(a.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,o?.length>0?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:o})]}):null,(0,c.jsxs)(a.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(a.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(a.Stack,{flexDirection:"column",children:[(0,c.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(a.Stack,{paddingTop:1,children:(0,c.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(a.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:x?(0,c.jsx)(a.Stack,{gap:"$3",children:x}):null})]})]})})})}}}]);
//# sourceMappingURL=93733.f578400d72.chunk.js.map