(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,,,,function(e,A,t){e.exports={container:"video_item_container__OefV5",grid:"video_item_grid__84il4",video:"video_item_video__fSUcw",thumbnail:"video_item_thumbnail__33AjP",metadata:"video_item_metadata__3zndv",channel:"video_item_channel__3PNg-"}},function(e,A,t){e.exports={header:"search_header_header__3BQqS",img:"search_header_img__ugH-T",logoContainer:"search_header_logoContainer__9wmQI",title:"search_header_title__3I6-e",inputContainer:"search_header_inputContainer__3MY86",input:"search_header_input__YQ9ah",button:"search_header_button__1jnMu",buttonImg:"search_header_buttonImg__264UD",iconsContainer:"search_header_iconsContainer__36Af5","youtube-icon":"search_header_youtube-icon__3DRxI"}},function(e,A,t){e.exports={detail:"video_detail_detail__-SpMW",description:"video_detail_description__19dkD",video:"video_detail_video__1LFDx",titlebox:"video_detail_titlebox__1cTp8"}},function(e,A,t){e.exports={container:"video_menu_container__2g_zA",icons:"video_menu_icons__3WAts"}},function(e,A,t){e.exports={app:"app_app__EdOIA",content:"app_content__142Tw",detail:"app_detail__1KwFt",list:"app_list__3u45n",videos:"app_videos__-10nW"}},,,,,,function(e,A,t){e.exports={videos:"video_list_videos__1S1_m",detail:"video_list_detail__AC_4I"}},function(e,A,t){e.exports={videosDetail:"video_list_videosDetail__2FgUe"}},,,,,function(e,A,t){},,,,,,,function(e,A,t){"use strict";t.r(A);var a=t(2),c=t.n(a),i=t(14),s=t.n(i),n=(t(21),t(9)),l=t.n(n),o=t(5),d=t.n(o),j=t(0);var r=e=>{let{video:A,video:{snippet:t},onVideoClick:a,display:c}=e;const i="list"===c?d.a.list:d.a.grid;return Object(j.jsx)("li",{className:"".concat(d.a.container," ").concat(i),onClick:()=>a(A),children:Object(j.jsxs)("div",{className:d.a.video,children:[Object(j.jsx)("img",{className:d.a.thumbnail,src:t.thumbnails.medium.url,alt:"video thumbnail"}),Object(j.jsxs)("div",{className:d.a.metadata,children:[Object(j.jsx)("p",{className:d.a.title,children:t.title}),Object(j.jsx)("p",{className:d.a.channel,children:t.channelTitle})]})]})})},b=t(15),h=t.n(b);var g=e=>{let{videos:A,onVideoClick:t,display:a}=e;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:h.a.videos,children:A.map((e=>Object(j.jsx)(r,{video:e,onVideoClick:t,display:a},e.id)))})})},m=t(6),p=t.n(m),u=t(4),O=t(3);var C=e=>{let{onSearch:A,mostPopular:t}=e;const c=Object(a.useRef)(),i=()=>{const e=c.current.value;""!==e?A(e):t()},s=()=>{i()};return Object(j.jsxs)("header",{className:p.a.header,children:[Object(j.jsxs)("div",{className:p.a.logoContainer,children:[Object(j.jsx)("a",{href:"/youtube",onClick:s,children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"})}),Object(j.jsx)("h1",{className:p.a.title,children:Object(j.jsx)("a",{href:"/youtube",onClick:s,children:"Youtube"})})]}),Object(j.jsxs)("div",{className:p.a.inputContainer,children:[Object(j.jsx)("input",{ref:c,className:p.a.input,type:"search",placeholder:"Search..."}),Object(j.jsx)("button",{className:p.a.button,type:"submit",onClick:()=>{i()},children:Object(j.jsx)("img",{className:p.a.buttonImg,src:"data:image/png;base64,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",alt:"search"})})]}),Object(j.jsxs)("div",{className:p.a.iconsContainer,children:[Object(j.jsx)("a",{href:"#",title:"\uc124\uc815",children:Object(j.jsx)(O.a,{icon:u.d})}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)(O.a,{icon:u.a})}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)(O.a,{icon:u.h})})]})]})},I=t(7),v=t.n(I);var x=e=>{let{video:A,video:{snippet:t}}=e;return Object(j.jsxs)("section",{className:v.a.detail,children:[Object(j.jsx)("iframe",{className:v.a.video,type:"text/html",width:"80%",height:"700px",src:"https://www.youtube.com/embed/".concat(A.id)}),Object(j.jsxs)("div",{className:v.a.titlebox,children:[Object(j.jsx)("h2",{className:v.a.title,children:t.title}),Object(j.jsx)("h3",{className:v.a.chtitle,children:t.channelTitle}),Object(j.jsx)("pre",{className:v.a.description,children:t.description})]})]})},E=t(8),G=t.n(E);var B=()=>Object(j.jsxs)("ul",{className:G.a.container,children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)(O.a,{className:G.a.icons,icon:u.f}),"\ud648"," "]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)(O.a,{className:G.a.icons,icon:u.c}),"\ud0d0\uc0c9"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)(O.a,{className:G.a.icons,icon:u.e}),"\uad6c\ub3c5"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)(O.a,{className:G.a.icons,icon:u.b}),"\uc2dc\uccad\uae30\ub85d"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)(O.a,{className:G.a.icons,icon:u.g}),"Music"]})})]}),N=t(13);var y=e=>{const[A,t]=Object(a.useState)([]),[c,i]=Object(a.useState)(!1),[s,n]=Object(a.useState)(null),l={method:"GET",redirect:"follow"};return{videos:A,loading:c,error:s,mostPopular:Object(a.useCallback)((async()=>{try{i(!0),n(null);const A=await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=".concat(e),l),a=await A.json();t(a.items)}catch(A){n(A.message)}finally{i(!1)}}),[e]),search:Object(a.useCallback)((async A=>{try{i(!0),n(null);const a=await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=".concat(A,"&type=video&key=").concat(e),l),c=(await a.json()).items.map((e=>Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})));t(c)}catch(a){n(a.message)}finally{i(!1)}}),[e])}},W=t(16),Z=t.n(W);var R=e=>{let{videos:A,onVideoClick:t,display:a}=e;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:Z.a.videosDetail,children:A.map((e=>Object(j.jsx)(r,{video:e,onVideoClick:t,display:a},e.id)))})})};var w=function(e){let{apiKey:A}=e;const{videos:t,loading:c,error:i,mostPopular:s,search:n}=y(A),[o,d]=Object(a.useState)(null),[r,b]=Object(a.useState)(!1),h=e=>{d(e),b(!0)};return Object(a.useEffect)((()=>{s()}),[s]),Object(j.jsxs)("div",{className:l.a.app,children:[Object(j.jsx)(C,{onSearch:n,mostPopular:s}),Object(j.jsxs)("section",{className:l.a.content,children:[!o&&Object(j.jsx)(B,{}),o&&Object(j.jsxs)("div",{className:l.a.detail,children:[Object(j.jsx)(x,{video:o})," ",Object(j.jsx)(R,{videos:t,onVideoClick:h,display:o?"list":"grid"})]}),c&&Object(j.jsx)("p",{children:"Loading..."}),i&&Object(j.jsxs)("p",{children:["Error: ",i]}),!c&&!i&&!o&&Object(j.jsx)("div",{className:l.a.list,children:Object(j.jsx)(g,{videos:t,onVideoClick:h,display:o?"list":"grid"})})]})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{apiKey:"AIzaSyD2M1OdEGfZOKN83EPW6rbA5NyX3l99RWE"})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.436dab1c.chunk.js.map