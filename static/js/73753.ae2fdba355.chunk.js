!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1a460e7b-4c13-471e-8491-074cd2c3ca39",e._sentryDebugIdIdentifier="sentry-dbid-1a460e7b-4c13-471e-8491-074cd2c3ca39")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[73753],{73753:(e,t,o)=>{o.r(t),o.d(t,{default:()=>stories_PasswordKeyboard});var n=o(514041),r=o(490343),a=o(831085),s="x";function PasswordKeyboard({value:e="",onChange:t}){var o=(0,n.useCallback)((function(o){o===s?t?.(e.substr(0,e.length-1)):e.length<6&&t?.(e+o)}),[e,t]),i=(0,n.useCallback)((function({item:e,index:t}){return(0,a.jsx)(r.Stack,{bg:"$bgStrong",disabled:e.length<=0,focusVisibleStyle:{bg:"$bgActive"},hoverStyle:{bg:"$bgActive"},pressStyle:{bg:"$bgActive"},"$platform-native":{flex:1},"$platform-web":{width:"33.3%"},marginRight:t%3!=2?1:0,marginTop:Math.floor(t/3)>0?1:0,h:"$14",justifyContent:"center",alignItems:"center",onPress:function(){return o(e)},children:e===s?(0,a.jsx)(r.Icon,{name:"XBackspaceOutline",color:"$iconStrong"}):(0,a.jsx)(r.SizableText,{size:"$heading3xl",children:e})})}),[o]);return(0,a.jsxs)(r.Stack,{borderRadius:"$3",overflow:"hidden",userSelect:"none","data-sentry-element":"Stack","data-sentry-component":"PasswordKeyboard","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LiteCard/components/PasswordKeyboard.tsx",children:[(0,a.jsxs)(r.XStack,{bg:"$bgSubdued",h:"$12",alignItems:"center","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LiteCard/components/PasswordKeyboard.tsx",children:[(0,a.jsx)(r.SizableText,{flex:1,size:"$heading4xl",textAlign:"center","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LiteCard/components/PasswordKeyboard.tsx",children:new Array(e.length).fill("•").join("")}),(0,a.jsx)(r.Stack,{position:"absolute",right:"$3",top:0,bottom:0,justifyContent:"center",alignItems:"center","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LiteCard/components/PasswordKeyboard.tsx",children:(0,a.jsx)(r.IconButton,{icon:"XBackspaceOutline",color:"$iconSubdued",variant:"tertiary",onPress:function(){return o(s)},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LiteCard/components/PasswordKeyboard.tsx"})})]}),(0,a.jsx)(r.ListView,{scrollEnabled:!1,data:["1","2","3","4","5","6","7","8","9","","0",s],numColumns:3,estimatedItemSize:"$10",renderItem:i,"data-sentry-element":"ListView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/LiteCard/components/PasswordKeyboard.tsx"})]})}var i=o(654004);const stories_PasswordKeyboard=function(){return(0,a.jsx)(i.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Uncontrolled",element:function(){var[e,t]=(0,n.useState)("");return(0,a.jsx)(PasswordKeyboard,{value:e,onChange:function(e){t(e)}})}}],"data-sentry-element":"Layout","data-sentry-component":"PasswordKeyboardGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/PasswordKeyboard.tsx"})}},654004:(e,t,o)=>{o.d(t,{P:()=>Layout});var n=o(586330),r=o(654266),a=o(490343),s=o(989375),i=o(547669),l=o(498356),p=o(193068),c=o(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,o){return(0,c.jsx)(a.Stack,{children:(0,c.jsxs)(a.SizableText,{children:[o+1,". ",t,o===e.length-1?"。":"；"]})},o.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:o=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:y=!1,children:k}){var g=(0,s.U6)(),h=(0,l.A)();return(0,c.jsx)(a.Page,{skipLoading:y,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:g,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(a.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(a.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.IconButton,{icon:"HomeLineOutline",onPress:function(){h.dispatch(r.y9.replace(p.WP.Main,{screen:p.V4.Developer,params:{screen:p.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(a.Button,{ml:"$4",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(a.Button,{ml:"$4",variant:"primary",onPress:(0,n.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(a.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,o?.length>0?(0,c.jsxs)(a.Stack,{gap:"$2",children:[(0,c.jsx)(a.Stack,{children:(0,c.jsx)(a.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:o})]}):null,(0,c.jsxs)(a.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(a.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(a.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(a.Stack,{flexDirection:"column",children:[(0,c.jsx)(a.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(a.Stack,{paddingTop:1,children:(0,c.jsxs)(a.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(a.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(a.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:k?(0,c.jsx)(a.Stack,{gap:"$3",children:k}):null})]})]})})})}}}]);
//# sourceMappingURL=73753.ae2fdba355.chunk.js.map