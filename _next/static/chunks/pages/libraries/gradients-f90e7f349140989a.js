(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{1858:function(s,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/libraries/gradients",function(){return t(5726)}])},106:function(s,e,t){"use strict";var o=t(5893),i=t(1163),r=t(1664),a=t.n(r),n=t(5697),l=t.n(n),d=t(9170),c=function(s){var e=s.labels,t=(0,i.useRouter)(),r=e.split(": ").reverse(),n=t.pathname.split("/"),l=r.map((function(s,e){return{label:s,url:"/".concat(n[e])}})),c=l.length,p=l.map((function(s,e){return c===e+1?(0,o.jsx)("li",{children:s.label},s.url):(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"".concat("/svg-zoo").concat(s.url),children:s.label})},s.url)}));return(0,o.jsx)("ol",{className:d.breadcrumbs,children:p})};e.Z=c,c.propTypes={labels:l().string.isRequired}},3729:function(s,e,t){"use strict";t.d(e,{Z:function(){return d}});var o=t(5893),i=t(5697),r=t.n(i),a=function(s){return s.replace(/ +/g,"-").replace(/\.+/g,"_").toLowerCase()},n=t(2892),l=function(s){var e=s.books,t=s.color,i=void 0===t?"var(--color-canvas-text)":t,r=s.canvas,l=s.title;return(0,o.jsxs)("article",{className:n.shelf,style:{backgroundColor:r,color:i},children:[(0,o.jsx)("h3",{className:n.shelfTitle,children:l}),(0,o.jsxs)("div",{className:n.bookList,children:[e.map((function(s){var e=s.title,t=s.cover;return(0,o.jsxs)("figure",{className:n.book,children:[(0,o.jsx)("img",{src:"".concat("/svg-zoo").concat(t),alt:""}),(0,o.jsx)("figcaption",{children:e})]},"shelf_".concat(a(e),"}"))})),(0,o.jsx)("div",{className:n.book,children:(0,o.jsxs)("a",{href:"https://journal.lilly.art/".concat(a(l),"/"),title:"More recommended books from ".concat(l),"aria-label":"More recommended books from ".concat(l),className:n.moreButton,children:[(0,o.jsx)("span",{className:n.moreArrow,"aria-hidden":"true",children:"\u2192"})," see all"]})})]})]})},d=l;l.propTypes={books:r().arrayOf(r().shape({title:r().string.isRequired,cover:r().string.isRequired})).isRequired,canvas:r().string.isRequired,color:r().string,title:r().string.isRequired}},5726:function(s,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return f}});var o=t(5893),i=t(5697),r=t.n(i),a=t(9008),n=t.n(a),l=t(3172),d=t(106),c=t(3729),p=t(5993),h=function(s){var e=s.lastUpdated,t="SVG Gradients: SVG Libraries: SVG ZOO";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n(),{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0"}),(0,o.jsx)("meta",{property:"og:title",content:t},"title")]}),(0,o.jsxs)(l.Z,{lastUpdated:e,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(d.Z,{labels:t}),(0,o.jsxs)("header",{children:[(0,o.jsx)("h1",{children:"SVG Gradients"}),(0,o.jsx)("p",{children:"SVG libraries of gradients."})]}),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Linear Gradients"}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem"},children:[(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"twoStopLinearGradient",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#0F0"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#00F"})]})}),(0,o.jsx)("rect",{fill:"url(#twoStopLinearGradient)",width:"100%",height:"100"})]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"twoStopReflectLinearGradient",spreadMethod:"reflect",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#0F0"}),(0,o.jsx)("stop",{offset:".5",stopColor:"#00F"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#0F0"})]})}),(0,o.jsx)("rect",{fill:"url(#twoStopReflectLinearGradient)",width:"100%",height:"100"})]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"rainbowSegmentGradient",children:[(0,o.jsx)("stop",{offset:"16.666%",stopColor:"hsl(0,80%,50%)"}),(0,o.jsx)("stop",{offset:"16.666%",stopColor:"hsl(60,80%,50%)"}),(0,o.jsx)("stop",{offset:"33.333%",stopColor:"hsl(60,80%,50%)"}),(0,o.jsx)("stop",{offset:"33.333%",stopColor:"hsl(120,80%,50%)"}),(0,o.jsx)("stop",{offset:"49.999%",stopColor:"hsl(120,80%,50%)"}),(0,o.jsx)("stop",{offset:"49.999%",stopColor:"hsl(180,80%,50%)"}),(0,o.jsx)("stop",{offset:"66.666%",stopColor:"hsl(180,80%,50%)"}),(0,o.jsx)("stop",{offset:"66.666%",stopColor:"hsl(240,80%,50%)"}),(0,o.jsx)("stop",{offset:"83.333%",stopColor:"hsl(240,80%,50%)"}),(0,o.jsx)("stop",{offset:"83.333%",stopColor:"hsl(300,80%,50%)"})]})}),(0,o.jsx)("rect",{fill:"url(#rainbowSegmentGradient)",width:"100%",height:"100"})]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"rainbowGradient",children:[(0,o.jsx)("stop",{offset:"16.666%",stopColor:"hsl(0,80%,50%)"}),(0,o.jsx)("stop",{offset:"33.333%",stopColor:"hsl(60,80%,50%)"}),(0,o.jsx)("stop",{offset:"49.999%",stopColor:"hsl(120,80%,50%)"}),(0,o.jsx)("stop",{offset:"66.666%",stopColor:"hsl(180,80%,50%)"}),(0,o.jsx)("stop",{offset:"83.333%",stopColor:"hsl(240,80%,50%)"}),(0,o.jsx)("stop",{offset:"100%",stopColor:"hsl(300,80%,50%)"})]})}),(0,o.jsx)("rect",{fill:"url(#rainbowGradient)",width:"100%",height:"100"})]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsxs)("linearGradient",{id:"repeatingGradient",spreadMethod:"repeat",x2:"20%",children:[(0,o.jsx)("stop",{stopColor:"#00f",offset:"0"}),(0,o.jsx)("stop",{stopColor:"#0f0",offset:"50%"}),(0,o.jsx)("stop",{stopColor:"#f00",offset:"100%"})]}),(0,o.jsx)("rect",{width:"100%",height:"100%",fill:"url(#repeatingGradient)"})]})})]})]}),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Radial Gradients"}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem"},children:[(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("radialGradient",{id:"twoStopRadialGradient",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#222"})]})}),(0,o.jsx)("rect",{height:"100%",width:"100%",fill:"url(#twoStopRadialGradient)"})]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("radialGradient",{id:"twoStopReflectRadialGradient",spreadMethod:"reflect",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#222"})]})}),(0,o.jsx)("rect",{height:"100%",width:"100%",fill:"url(#twoStopReflectRadialGradient)"})]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("radialGradient",{id:"tunnel",spreadMethod:"reflect",gradientUnits:"userSpaceOnUse",cx:"33.333%",cy:"66.666%",r:"16px",children:[(0,o.jsx)("stop",{offset:"0.333",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"0.825",stopColor:"#555"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#222"})]})}),(0,o.jsx)("rect",{height:"100%",width:"100%",fill:"url(#tunnel)"})]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("svg",{viewBox:"0,0 100,100",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("radialGradient",{id:"center",spreadMethod:"repeat",r:"40%",gradientTransform:"translate(-0.3,0) skewX(30)",fx:"75%",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#222"}),(0,o.jsx)("stop",{offset:"0.5",stopColor:"#f00"}),(0,o.jsx)("stop",{offset:"0.7",stopColor:"#00f"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#222"})]})}),(0,o.jsx)("rect",{width:"100%",height:"100%",fill:"url(#center)"})]})})]})]})]}),(0,o.jsx)(c.Z,{color:"#fff",canvas:"#0D4863",title:"SVG Library",books:p.Cb})]})]})},f=!0;e.default=h,h.propTypes={lastUpdated:r().string.isRequired}},9170:function(s){s.exports={breadcrumbs:"style_breadcrumbs__pco4b"}},2892:function(s){s.exports={shelf:"style_shelf__gbNWt",shelfTitle:"style_shelfTitle__CXjHp",bookList:"style_bookList__wDsOQ",book:"style_book__ge8EM",moreArrow:"style_moreArrow__SyXwa",moreButton:"style_moreButton__QqEcJ"}},5993:function(s){"use strict";s.exports=JSON.parse('{"kn":[{"id":1,"title":"Understanding SVGs","description":"Learn about SVG anatomy, usage, benefits, and short comings.","image":"assets/images/anatomy_frog.svg","cta":{"url":"/guides/understanding-svgs","lead":"Find out more about ","label":"Understanding SVGs"}},{"id":2,"title":"Drawing SVGs","description":"Learn about the basic coordinate system and elements to draw your SVGs.","image":"assets/images/drawing_lion.svg","cta":{"url":"/guides/drawing-svgs","lead":"Find out more about ","label":"Drawing SVGs"}},{"id":3,"title":"Painting SVGs","description":"Learn about using fills, strokes, transparencies, gradients, and patterns.","image":"assets/images/painting_toucans.svg","cta":{"url":"/guides/painting-svgs","lead":"Find out more about ","label":"Painting SVGs"}},{"id":4,"title":"Compositing SVGs","description":"Learn how to use and combine advanced graphics filters on your SVGs.","image":"assets/images/filter_bunny.svg","cta":{"url":"/guides/compositing-svgs","lead":"Find out more about ","label":"Compositing SVGs"}},{"id":5,"title":"Animating SVGs","description":"Learn how to transform, energize, and make your SVGs dance.","image":"assets/images/animation_bee.svg","cta":{"url":"/guides/animating-svgs","lead":"Find out more about ","label":"Animating SVGs"}},{"id":6,"title":"Programming SVGs","description":"Learn how to make your SVGs react, take input, and perform.","image":"assets/images/program_mole.webp","cta":{"url":"/guides/programming-svgs","lead":"Find out more about ","label":"Programming SVGs"}}],"Cb":[{"title":"SVG Essentials","subtitle":"Producing Scalable Vector Graphics with XML","author":"J. David Eisenberg and Amelia Bellamy-Royds","date":"2014","url":"https://www.amazon.com/SVG-Essentials-Producing-Scalable-Graphics/dp/1449374352/","cover":"/assets/images/books/svg_essentials.jpg"},{"title":"SVG Text Layout","subtitle":"Words as Art","author":"Amelia Bellamy-Royds and Kurt Cagle","date":"2015","url":"https://www.amazon.com/SVG-Text-Layout-Words-Art-ebook/dp/B0170QTV06/","cover":"/assets/images/books/svg_text.jpg"},{"title":"Practical SVG","subtitle":"","author":"Chris Coyier","date":"2016","url":"https://www.amazon.com/Practical-SVG-Chris-Coyier/dp/193755743X/","cover":"/assets/images/books/practical_svg.jpg"},{"title":"Using SVG with CSS3 & HTML5","subtitle":"Vector Graphics for Web Design","author":"Amelia Bellamy-Royds and Kurt Cagle","date":"2017","url":"https://www.amazon.com/Using-SVG-CSS3-HTML5-Graphics/dp/1491921978/","cover":"/assets/images/books/using_svg.jpg"},{"title":"SVG Animations","subtitle":"From Common UX Implementations to Complex Responsive Animation","author":"Sarah Drasner","date":"2017","url":"https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702/","cover":"/assets/images/books/svg_animations.jpg"}]}')}},function(s){s.O(0,[814,172,774,888,179],(function(){return e=1858,s(s.s=e);var e}));var e=s.O();_N_E=e}]);