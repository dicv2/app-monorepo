!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d14092c9-5b05-4d73-a50a-b1e008cb85ea",e._sentryDebugIdIdentifier="sentry-dbid-d14092c9-5b05-4d73-a50a-b1e008cb85ea")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[79623,43103],{643103:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,mapIndexToData:()=>mapIndexToData});var r=n(324586),o=n(514041),a=n(490343),s=n(791088),i=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var mapIndexToData=function(e,t,n){return{index:t,backgroundColor:function(e,t=25){var n=e*(255/(t-1));return`rgb(${n}, ${Math.abs(128-n)}, ${255-n})`}(t,n.length)}};const __WEBPACK_DEFAULT_EXPORT__=function(){var[e,t]=(0,o.useState)(new Array(15).fill({}).map(mapIndexToData)),[n,r]=(0,o.useState)(!1),c=(0,o.useCallback)((function(){return(0,i.jsx)(a.Button,{onPress:function(){return r(!n)},children:n?"Done":"Edit"})}),[n,r]),l=(0,o.useCallback)((function(n){var r=n();if(void 0!==r){var o=[...e];o.splice(r,1),t(o)}}),[e,t]);return(0,i.jsxs)(a.Page,{"data-sentry-element":"Page","data-sentry-component":"SortableListViewGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SortableListView.tsx",children:[(0,i.jsx)(a.Page.Header,{headerRight:c,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SortableListView.tsx"}),(0,i.jsx)(a.SortableListView,{bg:"$bgApp",data:e,enabled:n,keyExtractor:function(e){return`${e.index}`},renderItem:function({item:e,getIndex:t,drag:r,dragProps:o}){return(0,i.jsx)(a.SwipeableCell,{swipeEnabled:!n,rightItemList:[{width:200,title:"DELETE",backgroundColor:"$bgCriticalStrong",onPress:function({close:e}){e?.(),l(t)}}],children:(0,i.jsx)(s.c,_objectSpread(_objectSpread({h:70,avatarProps:{src:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",size:"$8"},title:`${e.index}可左滑拖动删除`},!n&&{onPress:function(){}}),{},{children:n?(0,i.jsx)(s.c.IconButton,{cursor:"move",icon:"DragOutline",onPressIn:r,dataSet:o},"darg"):null}))})},getItemLayout:function(e,t){return{length:70,offset:70*t,index:t}},onDragEnd:function(e){return t(e.data)},"data-sentry-element":"SortableListView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SortableListView.tsx"})]})}},179623:(e,t,n)=>{n.r(t),n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n(324586),o=n(514041),a=n(490343),s=n(791088),i=n(643103),c=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=function(){var[e,t]=(0,o.useState)(new Array(10).fill({}).map((function(){return{data:new Array(10).fill({}).map(i.mapIndexToData)}}))),[n,r]=(0,o.useState)(!1),l=(0,o.useCallback)((function(){return(0,c.jsx)(a.Button,{onPress:function(){return r(!n)},children:n?"Done":"Edit"})}),[n,r]),p=(0,o.useCallback)((function(n,r){var o=n();if(void 0!==o){var a=e.find((function(e){return e===r}));if(a){var s=[...a.data];s.splice(o,1),a.data=s,t(r)}}}),[e,t]),u=(0,o.useMemo)((function(){var t=100,n=[];return e.forEach((function(e,r){0!==r&&(n.push({offset:t,length:8,index:n.length}),t+=8);n.push({offset:t,length:36,index:n.length}),t+=36,e.data.forEach((function(){n.push({offset:t,length:70,index:n.length}),t+=70}));n.push({offset:t,length:0,index:n.length}),t+=0})),n}),[e]);return(0,c.jsxs)(a.Page,{"data-sentry-element":"Page","data-sentry-component":"SortableSectionListGallery","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SortableSectionList.tsx",children:[(0,c.jsx)(a.Page.Header,{headerRight:l,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SortableSectionList.tsx"}),(0,c.jsx)(a.SortableSectionList,{bg:"$bgApp",sections:e,enabled:n,keyExtractor:function(e){return`${e.index}`},getItemLayout:function(e,t){return-1===t?{index:t,offset:100,length:0}:u[t]},renderSectionHeader:function({index:e}){return(0,c.jsx)(a.SortableSectionList.SectionHeader,{px:0,title:`Section ${e}`})},ListHeaderComponent:(0,c.jsx)(a.Stack,{h:100}),initialScrollIndex:{sectionIndex:4,itemIndex:5},renderItem:function({item:e,section:t,drag:r,dragProps:o}){return(0,c.jsx)(a.SwipeableCell,{swipeEnabled:!n,rightItemList:[{width:200,title:"DELETE",backgroundColor:"$bgCriticalStrong",onPress:function({close:n}){n?.(),p((function(){return e.index}),t)}}],children:(0,c.jsx)(s.c,_objectSpread(_objectSpread({h:70,avatarProps:{src:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/btc.png",size:"$8"},title:`${e.index}可左滑拖动删除`},!n&&{onPress:function(){}}),{},{children:n?(0,c.jsx)(s.c.IconButton,{cursor:"move",icon:"DragOutline",onPressIn:r,dataSet:o},"darg"):null}))})},onDragEnd:function(e){return t(e.sections)},stickySectionHeadersEnabled:!0,"data-sentry-element":"SortableSectionList","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Developer/pages/Gallery/Components/stories/SortableSectionList.tsx"})]})}}}]);
//# sourceMappingURL=79623.28e0a1a49b.chunk.js.map