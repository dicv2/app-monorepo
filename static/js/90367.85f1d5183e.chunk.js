!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="27f7135e-2991-4853-9073-bee7c76fc800",e._sentryDebugIdIdentifier="sentry-dbid-27f7135e-2991-4853-9073-bee7c76fc800")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90367],{790367:(e,t,a)=>{a.r(t),a.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var n=a(324586),o=a(186207),r=a(514041),s=a(490343),l=a(654004),p=a(831085);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){(0,n.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function CheckboxDemo(e){var t=Object.assign({},((0,o.A)(e),e)),[a,n]=(0,r.useState)(!1);return(0,p.jsx)(s.Checkbox,_objectSpread(_objectSpread({value:a,onChange:function(){n(!a)}},t),{},{"data-sentry-element":"Checkbox","data-sentry-component":"CheckboxDemo","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Checkbox.tsx"}))}function CheckboxGroupDemo(){var[e,t]=(0,r.useState)([!1,!0,!1]);return(0,p.jsx)(s.Checkbox.Group,{label:"All",listStyle:{},options:[{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"},{label:"Apple"},{label:"Banana"},{label:"Orange"},{label:"Watermelon"}],value:e,onChange:function(e){t(e)},"data-sentry-element":"unknown","data-sentry-component":"CheckboxGroupDemo","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Checkbox.tsx"})}const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,p.jsx)(l.P,{description:"..",suggestions:["..."],boundaryConditions:["..."],elements:[{title:"Default",element:(0,p.jsxs)(s.Stack,{children:[(0,p.jsx)(CheckboxDemo,{}),(0,p.jsx)(CheckboxDemo,{label:"With label"}),(0,p.jsx)(CheckboxDemo,{label:"Unchecked and disabled",disabled:!0,value:!1}),(0,p.jsx)(CheckboxDemo,{label:"Checked and disabled",disabled:!0,value:!0})]})},{title:"Checkbox Group",description:"Checkbox Group 中展示的 Checkbox 数量越多，在数据更新时将会越影响性能。通过虚拟列表减少同屏展示的视图数量，可以缓解性能问题。",element:(0,p.jsx)(CheckboxGroupDemo,{})}],"data-sentry-element":"Layout","data-sentry-component":"CheckboxGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/Checkbox.tsx"})}},654004:(e,t,a)=>{a.d(t,{P:()=>Layout});var n=a(586330),o=a(654266),r=a(490343),s=a(989375),l=a(547669),p=a(498356),i=a(193068),c=a(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(r.Stack,{children:(0,c.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,a){return(0,c.jsx)(r.Stack,{children:(0,c.jsxs)(r.SizableText,{children:[a+1,". ",t,a===e.length-1?"。":"；"]})},a.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:a=[],elements:d=[],scrollEnabled:u=!0,contentInsetAdjustmentBehavior:m="never",skipLoading:b=!1,children:k}){var y=(0,s.U6)(),h=(0,p.A)();return(0,c.jsx)(r.Page,{skipLoading:b,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:u,flex:1,marginBottom:y,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:m,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(r.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){h.dispatch(o.y9.replace(i.WP.Main,{screen:i.V4.Developer,params:{screen:i.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(r.Button,{ml:"$4",onPress:(0,n.A)((function*(){yield l.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,n.A)((function*(){yield l.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(r.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,a?.length>0?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:a})]}):null,(0,c.jsxs)(r.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:d?.map((function(e,t){return(0,c.jsxs)(r.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(r.Stack,{flexDirection:"column",children:[(0,c.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(r.Stack,{paddingTop:1,children:(0,c.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(r.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:k?(0,c.jsx)(r.Stack,{gap:"$3",children:k}):null})]})]})})})}}}]);
//# sourceMappingURL=90367.85f1d5183e.chunk.js.map