!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8c4fab6a-e12c-444d-838c-8ba18e4b10b8",e._sentryDebugIdIdentifier="sentry-dbid-8c4fab6a-e12c-444d-838c-8ba18e4b10b8")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[19026],{19026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=n(514041),r=n(490343),a=n(654004),s=n(831085),SegmentControlExample1=function(){var[e,t]=(0,o.useState)(1);return(0,s.jsx)(r.SegmentControl,{value:e,onChange:function(e){t(e)},options:[{label:"Label 1",value:1},{label:"Label 2",value:2},{label:"Label 3",value:3}],"data-sentry-element":"SegmentControl","data-sentry-component":"SegmentControlExample1","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SegmentControl.tsx"})},SegmentControlExample2=function(){var[e,t]=(0,o.useState)(1);return(0,s.jsx)(r.SegmentControl,{fullWidth:!0,value:e,onChange:function(e){t(e)},options:[{label:"Label 1",value:1},{label:"Label 2",value:2},{label:"Label 3",value:3}],"data-sentry-element":"SegmentControl","data-sentry-component":"SegmentControlExample2","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SegmentControl.tsx"})},SegmentControlExample3=function(){var[e,t]=(0,o.useState)(1);return(0,s.jsx)(r.SegmentControl,{fullWidth:!0,value:e,onChange:function(e){t(e)},options:[{label:(0,s.jsxs)(r.YStack,{children:[(0,s.jsx)(r.SizableText,{textAlign:"center",color:1===e?"$text":"$textSubdued",children:"a"}),(0,s.jsx)(r.SizableText,{color:"$textSubdued",textAlign:"center",children:"1"})]}),value:1},{label:(0,s.jsxs)(r.YStack,{children:[(0,s.jsx)(r.SizableText,{textAlign:"center",color:2===e?"$text":"$textSubdued",children:"b"}),(0,s.jsx)(r.SizableText,{color:"$textSubdued",textAlign:"center",children:"2"})]}),value:2},{label:(0,s.jsxs)(r.YStack,{children:[(0,s.jsx)(r.SizableText,{textAlign:"center",color:3===e?"$text":"$textSubdued",children:"c"}),(0,s.jsx)(r.SizableText,{color:"$textSubdued",textAlign:"center",children:"3"})]}),value:3}],"data-sentry-element":"SegmentControl","data-sentry-component":"SegmentControlExample3","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SegmentControl.tsx"})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,s.jsx)(a.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,s.jsx)(SegmentControlExample1,{})},{title:"Full Width",element:(0,s.jsx)(SegmentControlExample2,{})},{title:"Custom Label",element:(0,s.jsx)(SegmentControlExample3,{})}],"data-sentry-element":"Layout","data-sentry-component":"SegmentControlGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SegmentControl.tsx"})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var o=n(586330),r=n(654266),a=n(490343),s=n(989375),l=n(547669),i=n(498356),p=n(193068),c=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,n){return(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:x=!1,children:g}){var y=(0,s.U6)(),k=(0,i.A)();return(0,c.jsx)(a.Page,{skipLoading:x,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:y,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(a.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){k.dispatch(r.y9.replace(p.WP.Main,{screen:p.V4.Developer,params:{screen:p.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(a.Button,{ml:"$4",onPress:(0,o.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,o.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(a.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:n})]}):null,(0,c.jsxs)(a.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(a.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(a.Stack,{flexDirection:"column",children:[(0,c.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(a.Stack,{paddingTop:1,children:(0,c.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(a.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:g?(0,c.jsx)(a.Stack,{gap:"$3",children:g}):null})]})]})})})}}}]);
//# sourceMappingURL=19026.efcd500af8.chunk.js.map