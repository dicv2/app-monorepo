!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4f6b264e-c655-4efd-8640-f48678a12403",e._sentryDebugIdIdentifier="sentry-dbid-4f6b264e-c655-4efd-8640-f48678a12403")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[24398],{224398:(e,t,o)=>{o.r(t),o.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=o(514041),s=o(490343),r=o(654004),n=o(831085),LottieDemo=function(){var e=(0,a.useRef)(null),[t,r]=(0,a.useState)(!0),[i,p]=(0,a.useState)(!0),[l,c]=(0,a.useState)(!0),createNewLottieView=function(){r(!1),setTimeout((function(){r(!0)}),100)};return(0,n.jsxs)(s.YStack,{gap:"$5","data-sentry-element":"YStack","data-sentry-component":"LottieDemo","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:[(0,n.jsx)(s.XStack,{h:100,"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:t?(0,n.jsx)(s.LottieView,{ref:e,width:"100%",height:"$24",autoPlay:l,loop:i,source:o(288804)}):null}),(0,n.jsxs)(s.XStack,{gap:"$5",alignItems:"center","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:[(0,n.jsx)(s.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:"loop: "}),(0,n.jsx)(s.Switch,{value:i,onChange:function(e){p(e),createNewLottieView()},"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx"})]}),(0,n.jsxs)(s.XStack,{gap:"$5",alignItems:"center","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:[(0,n.jsx)(s.SizableText,{"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:"autoPlay: "}),(0,n.jsx)(s.Switch,{value:l,onChange:function(e){c(e),createNewLottieView()},"data-sentry-element":"Switch","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx"})]}),(0,n.jsxs)(s.XStack,{gap:"$5","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:[(0,n.jsx)(s.Button,{onPress:function(){e.current?.play?.()},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:"play"}),(0,n.jsx)(s.Button,{onPress:function(){e.current?.pause?.()},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:"pause"}),(0,n.jsx)(s.Button,{onPress:function(){e.current?.reset()},"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx",children:"reset"})]})]})};const __WEBPACK_DEFAULT_EXPORT__=function(){return(0,n.jsx)(r.P,{description:"",suggestions:[],boundaryConditions:[],elements:[{title:"默认",element:(0,n.jsx)(LottieDemo,{})}],"data-sentry-element":"Layout","data-sentry-component":"LottieViewGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/LottieView.tsx"})}},654004:(e,t,o)=>{o.d(t,{P:()=>Layout});var a=o(586330),s=o(654266),r=o(490343),n=o(989375),i=o(547669),p=o(498356),l=o(193068),c=o(831085),FormattedText=function({text:e}){return"string"==typeof e?(0,c.jsx)(r.Stack,{children:(0,c.jsxs)(r.SizableText,{children:[e,"。 "]})}):Array.isArray(e)&&0===e.length?null:(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-component":"FormattedText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.Stack,{gap:"$1","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:e.map((function(t,o){return(0,c.jsx)(r.Stack,{children:(0,c.jsxs)(r.SizableText,{children:[o+1,". ",t,o===e.length-1?"。":"；"]})},o.toString())}))})})};function Layout({description:e="",suggestions:t=[],boundaryConditions:o=[],elements:m=[],scrollEnabled:k=!0,contentInsetAdjustmentBehavior:x="never",skipLoading:d=!1,children:y}){var u=(0,n.U6)(),h=(0,p.A)();return(0,c.jsx)(r.Page,{skipLoading:d,"data-sentry-element":"Page","data-sentry-component":"Layout","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.ScrollView,{maxWidth:"100%",scrollEnabled:k,flex:1,marginBottom:u,paddingHorizontal:"$5",contentContainerStyle:{paddingTop:20,paddingBottom:280},keyboardDismissMode:"on-drag",contentInsetAdjustmentBehavior:x,"data-sentry-element":"ScrollView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsxs)(r.Stack,{marginHorizontal:"auto",maxWidth:"100%",width:576,gap:"$6","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsxs)(r.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(r.IconButton,{icon:"HomeLineOutline",onPress:function(){h.dispatch(s.y9.replace(l.WP.Main,{screen:l.V4.Developer,params:{screen:l.f$.TabDeveloper}}))},"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx"}),(0,c.jsx)(r.Button,{ml:"$4",onPress:(0,a.A)((function*(){yield i.A.serviceSetting.setTheme("light")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Light Theme"}),(0,c.jsx)(r.Button,{ml:"$4",variant:"primary",onPress:(0,a.A)((function*(){yield i.A.serviceSetting.setTheme("dark")})),"data-sentry-element":"Button","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"Dark Theme"})]}),e?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"使用说明"})}),(0,c.jsx)(r.Stack,{children:(0,c.jsx)(FormattedText,{text:e})})]}):null,t?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"使用建议"})}),(0,c.jsx)(FormattedText,{text:t})]}):null,o?.length>0?(0,c.jsxs)(r.Stack,{gap:"$2",children:[(0,c.jsx)(r.Stack,{children:(0,c.jsx)(r.SizableText,{size:"$headingXl",children:"注意事项"})}),(0,c.jsx)(FormattedText,{text:o})]}):null,(0,c.jsxs)(r.Stack,{gap:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:[(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:(0,c.jsx)(r.SizableText,{size:"$headingXl","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:"组件案例"})}),(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:m?.map((function(e,t){return(0,c.jsxs)(r.Stack,{gap:"$2",pb:"$8",mb:"$8",borderBottomWidth:"$px",borderBottomColor:"$borderSubdued",children:[(0,c.jsxs)(r.Stack,{flexDirection:"column",children:[(0,c.jsx)(r.SizableText,{size:"$headingLg",children:e.title}),e.description?(0,c.jsx)(r.Stack,{paddingTop:1,children:(0,c.jsxs)(r.SizableText,{children:[e.description,"。"]})}):null]}),(0,c.jsx)(r.Stack,{children:"function"==typeof e.element?(0,c.jsx)(e.element,{}):e.element})]},`elements-${t}`)}))}),(0,c.jsx)(r.Stack,{"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/utils/Layout.tsx",children:y?(0,c.jsx)(r.Stack,{gap:"$3",children:y}):null})]})]})})})}},288804:e=>{e.exports=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":24,"ip":0,"op":47,"w":520,"h":520,"nm":"Checklist 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Checklist","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":46.728,"s":[100]},{"t":62,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[259.587,260.119,0],"ix":2},"a":{"a":0,"k":[297.587,298.119,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[54.754,-36.121],[-17.487,36.12],[-54.754,-1.147]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":23,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[294.971,298.679],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13.637,"s":[100]},{"t":28.9091796875,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":720,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Cricle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":46.728,"s":[100]},{"t":62,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2},"a":{"a":0,"k":[-7.627,-7.691,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":6,"s":[124.222,124.222,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8.546,"s":[134.222,134.222,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":11.091,"s":[114.222,114.222,100]},{"t":13.63671875,"s":[124.222,124.222,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[178.46,178.46],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.239],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":13.63671875,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11.091,"s":[0]},{"t":13.63671875,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.627,-7.691],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":720,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":19,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":32.728,"s":[100]},{"t":46.7275390625,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2},"a":{"a":0,"k":[298,298,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":19,"s":[46,46,100]},{"t":46.7275390625,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-120.208,0],[0,-120.208],[120.207,0],[0,120.208]],"o":[[120.207,0],[0,120.208],[-120.208,0],[0,-120.208]],"v":[[0,-217.655],[217.655,0],[0,217.655],[-217.655,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[297.587,298.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":19,"op":720,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shadow","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11.091,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25.091,"s":[20]},{"t":39.0908203125,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2},"a":{"a":0,"k":[298,298,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":11.091,"s":[60,60,100]},{"t":39.0908203125,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-94.797,0],[0,-94.797],[94.797,0],[0,94.798]],"o":[[94.797,0],[0,94.798],[-94.797,0],[0,-94.797]],"v":[[0,-171.646],[171.646,0],[0,171.646],[-171.646,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[297.587,298.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":720,"st":0,"bm":0}],"markers":[]}')}}]);
//# sourceMappingURL=24398.e7a39bb8cf.chunk.js.map