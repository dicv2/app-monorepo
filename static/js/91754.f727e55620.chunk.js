!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0b5a5a96-db85-4f98-9f39-5f645f5f370d",e._sentryDebugIdIdentifier="sentry-dbid-0b5a5a96-db85-4f98-9f39-5f645f5f370d")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[91754],{691754:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=n(490343),s=n(663522),a=n(654004),r=n(831085);const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,r.jsx)(a.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"States",element:(0,r.jsxs)(o.Stack,{gap:"$4",children:[(0,r.jsx)(o.TextArea,{placeholder:"Placeholder"}),(0,r.jsx)(o.TextArea,{value:"Read Only",editable:!1}),(0,r.jsx)(o.TextArea,{value:"Disabled",disabled:!0}),(0,r.jsx)(o.TextArea,{multiline:!0,value:"text",numberOfLines:14,editable:!1,disabled:!0,minHeight:s.Ay.isNativeIOS?"$20":void 0}),(0,r.jsx)(o.TextArea,{error:!0}),(0,r.jsx)(o.TextAreaInput,{addOns:[{testID:"account-key-show-btn",iconName:"EyeOutline",onPress:function(){alert("eyes")}},{iconName:"Copy3Outline",testID:"account-key-copy-btn",onPress:function(){alert("copy")}}]})]})}],"data-sentry-element":"Layout","data-sentry-component":"TextAreaGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/TextArea.tsx"})}},654004:(e,t,n)=>{n.d(t,{P:()=>Layout});var o=n(586330),s=n(654266),a=n(490343),r=n(989375),i=n(547669),l=n(498356),p=n(193068),c=n(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,n){return(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[n+1,". ",t,n===e.length-1?"。":"；"]})},n.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:n=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:y=!1,children:x}){var k=(0,r.U6)(),g=(0,l.A)();return(0,c.jsx)(a.Page,{skipLoading:y,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:k,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(a.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){g.dispatch(s.y9.replace(p.WP.Main,{screen:p.V4.Developer,params:{screen:p.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(a.Button,{ml:"$4",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,o.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(a.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,n?.length>0?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:n})]}):null,(0,c.jsxs)(a.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(a.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(a.Stack,{flexDirection:"column",children:[(0,c.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(a.Stack,{paddingTop:1,children:(0,c.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(a.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:x?(0,c.jsx)(a.Stack,{gap:"$3",children:x}):null})]})]})})})}}}]);
//# sourceMappingURL=91754.f727e55620.chunk.js.map