(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{1798:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colophon",function(){return t(2864)}])},3729:function(e,i,t){"use strict";t.d(i,{Z:function(){return d}});var s=t(5893),n=t(5697),o=t.n(n),a=function(e){return e.replace(/ +/g,"-").replace(/\.+/g,"_").toLowerCase()},r=t(2892),l=function(e){var i=e.books,t=e.color,n=void 0===t?"var(--color-canvas-text)":t,o=e.canvas,l=e.title;return(0,s.jsxs)("article",{className:r.shelf,style:{backgroundColor:o,color:n},children:[(0,s.jsx)("h3",{className:r.shelfTitle,children:l}),(0,s.jsxs)("div",{className:r.bookList,children:[i.map((function(e){var i=e.title,t=e.cover;return(0,s.jsxs)("figure",{className:r.book,children:[(0,s.jsx)("img",{src:"".concat("/svg-zoo").concat(t),alt:""}),(0,s.jsx)("figcaption",{children:i})]},"shelf_".concat(a(i),"}"))})),(0,s.jsx)("div",{className:r.book,children:(0,s.jsxs)("a",{href:"https://journal.lilly.art/".concat(a(l),"/"),title:"More recommended books from ".concat(l),"aria-label":"More recommended books from ".concat(l),className:r.moreButton,children:[(0,s.jsx)("span",{className:r.moreArrow,"aria-hidden":"true",children:"\u2192"})," see all"]})})]})]})},d=l;l.propTypes={books:o().arrayOf(o().shape({title:o().string.isRequired,cover:o().string.isRequired})).isRequired,canvas:o().string.isRequired,color:o().string,title:o().string.isRequired}},2864:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return b}});var s=t(5893),n=t(7294),o=t(5697),a=t.n(o),r=t(9008),l=t.n(r),d=t(3172),c=t(3729),h=t(5993),g=function(e){var i=e.indexOf("MSIE")>-1||e.indexOf("rv:")>-1,t=e.indexOf("Chrome")>-1,s=e.indexOf("Edg")>-1,n=e.indexOf("Firefox")>-1,o=e.indexOf("Opera")>-1||e.indexOf("OP")>-1,a=e.indexOf("Safari")>-1;return o?"Opera":s?"Microsoft Edge":t?"Chrome":a?"Safari":n?"Firefox":i?"Internet Explorer":"an unknown"},u=function(e){return!1===e||null===e?"Unknown":e.indexOf("Linux")>-1?"Linux":e.indexOf("iP")>-1?"iOS":e.indexOf("Mac")>-1?"OS X":e.indexOf("Sun")>-1?"Solaris":e.indexOf("Win")>-1?"Windows":e},m=function(e){return/nintendo|playstation|psp|xbox/i.test(e.toLowerCase())?"Console":/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|xoom|sch-i800|pixel c|sm-t827r4|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(e.toLowerCase())?"Tablet":/mobile|ipad|phone|ipod|android|blackberry|mini|windows\sce|palm/i.test(e.toLowerCase())?"Mobile":"Desktop"},p=function(e){var i=e.indexOf("Chrome")>-1&&e.indexOf("Windows")>-1||e.indexOf("OPR")>-1,t=e.indexOf("Xbox")>-1,s=e.indexOf("Gecko")>-1,n=e.indexOf("Opera")>-1,o=e.indexOf("Trident")>-1,a=e.indexOf("WebKit")>-1;return n?"the Presto":o?"the Trident":t?"the EdgeHTML":i?"the Blink":a?"the WebKit":s?"the Gecko":"an unknown"},f=function(e){var i=e.lastUpdated,t=(0,n.useState)({}),o=t[0],a=t[1];(0,n.useEffect)((function(){var e=window.innerHeight,i=window.innerWidth,t=navigator.platform,s=navigator.userAgent;a({browserFamily:g(s),rendering:p(s),innerHeight:e,innerWidth:i,height:window.screen.height,width:window.screen.width,os:u(t),device:m(s),userAgent:s})}),[]);var r="Colophon: SVG ZOO";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:r}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0"}),(0,s.jsx)("meta",{property:"og:title",content:r},"title")]}),(0,s.jsxs)(d.Z,{lastUpdated:i,children:[(0,s.jsxs)("article",{children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("h1",{children:"Colophon"}),(0,s.jsx)("p",{children:"A colophon is a page at the back of a book, originating from the Greek word for \u201csummit\u201d. The purpose of a colophon is to give the reader information about the book\u2019s authorship and construction methods. It is the final touch put on the work."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"The Technology Stack"}),(0,s.jsx)("p",{children:"The primary technology that this site showcases is Scalable Vector Graphics."}),(0,s.jsxs)("p",{children:["This site was designed and developed using ",(0,s.jsx)("a",{href:"https://jamstack.org/",children:"JAM stack principles"}),", the ",(0,s.jsx)("a",{href:"https://reactjs.org/",children:"React"})," library with ",(0,s.jsx)("a",{href:"https://nextjs.org/",children:"Next.js"})," and served on ",(0,s.jsx)("a",{href:"https://pages.github.com/",children:"GitHub Pages"}),"."]}),(0,s.jsxs)("p",{children:["It is currently displayed on ",o.os," operating system in ",o.browserFamily," browser using ",o.rendering," rendering engine with a screen size of ",o.width,"\xd7",o.height," and document size of ",o.innerWidth,"\xd7",o.innerHeight," (if your browser is being honest)."]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Navigation Icon"}),(0,s.jsxs)("figure",{style:{textAlign:"center",margin:"1rem 0"},children:[(0,s.jsx)("figcaption",{style:{textAlign:"left"},children:(0,s.jsx)("p",{children:"The main navigation icon is a ship\u2019s wheel in homage to Netscape Navigator, the inherent nautical theme of the World Wide Web, and because I hate the hamburger."})}),(0,s.jsx)("svg",{height:"300",width:"300",viewBox:"0 0 100 100",fill:"#fff6",stroke:"currentColor",style:{border:"none",backgroundColor:"transparent"},children:(0,s.jsx)("use",{href:"#helm",height:"100",width:"100"})})]})]})]}),(0,s.jsx)(c.Z,{color:"#fff",canvas:"#0D4863",title:"SVG Library",books:h.Cb})]})]})},b=!0;i.default=f,f.propTypes={lastUpdated:a().string.isRequired}},2892:function(e){e.exports={shelf:"style_shelf__gbNWt",shelfTitle:"style_shelfTitle__CXjHp",bookList:"style_bookList__wDsOQ",book:"style_book__ge8EM",moreArrow:"style_moreArrow__SyXwa",moreButton:"style_moreButton__QqEcJ"}},5993:function(e){"use strict";e.exports=JSON.parse('{"kn":[{"id":1,"title":"Understanding SVGs","description":"Learn about SVG anatomy, usage, benefits, and short comings.","image":"assets/images/anatomy_frog.svg","cta":{"url":"/guides/understanding-svgs","lead":"Find out more about ","label":"Understanding SVGs"}},{"id":2,"title":"Drawing SVGs","description":"Learn about the basic coordinate system and elements to draw your SVGs.","image":"assets/images/drawing_lion.svg","cta":{"url":"/guides/drawing-svgs","lead":"Find out more about ","label":"Drawing SVGs"}},{"id":3,"title":"Painting SVGs","description":"Learn about using fills, strokes, transparencies, gradients, and patterns.","image":"assets/images/painting_toucans.svg","cta":{"url":"/guides/painting-svgs","lead":"Find out more about ","label":"Painting SVGs"}},{"id":4,"title":"Compositing SVGs","description":"Learn how to use and combine advanced graphics filters on your SVGs.","image":"assets/images/filter_bunny.svg","cta":{"url":"/guides/compositing-svgs","lead":"Find out more about ","label":"Compositing SVGs"}},{"id":5,"title":"Animating SVGs","description":"Learn how to transform, energize, and make your SVGs dance.","image":"assets/images/animation_bee.svg","cta":{"url":"/guides/animating-svgs","lead":"Find out more about ","label":"Animating SVGs"}},{"id":6,"title":"Programming SVGs","description":"Learn how to make your SVGs react, take input, and perform.","image":"assets/images/program_mole.webp","cta":{"url":"/guides/programming-svgs","lead":"Find out more about ","label":"Programming SVGs"}}],"Cb":[{"title":"SVG Essentials","subtitle":"Producing Scalable Vector Graphics with XML","author":"J. David Eisenberg and Amelia Bellamy-Royds","date":"2014","url":"https://www.amazon.com/SVG-Essentials-Producing-Scalable-Graphics/dp/1449374352/","cover":"/assets/images/books/svg_essentials.jpg"},{"title":"SVG Text Layout","subtitle":"Words as Art","author":"Amelia Bellamy-Royds and Kurt Cagle","date":"2015","url":"https://www.amazon.com/SVG-Text-Layout-Words-Art-ebook/dp/B0170QTV06/","cover":"/assets/images/books/svg_text.jpg"},{"title":"Practical SVG","subtitle":"","author":"Chris Coyier","date":"2016","url":"https://www.amazon.com/Practical-SVG-Chris-Coyier/dp/193755743X/","cover":"/assets/images/books/practical_svg.jpg"},{"title":"Using SVG with CSS3 & HTML5","subtitle":"Vector Graphics for Web Design","author":"Amelia Bellamy-Royds and Kurt Cagle","date":"2017","url":"https://www.amazon.com/Using-SVG-CSS3-HTML5-Graphics/dp/1491921978/","cover":"/assets/images/books/using_svg.jpg"},{"title":"SVG Animations","subtitle":"From Common UX Implementations to Complex Responsive Animation","author":"Sarah Drasner","date":"2017","url":"https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702/","cover":"/assets/images/books/svg_animations.jpg"}]}')}},function(e){e.O(0,[814,172,774,888,179],(function(){return i=1798,e(e.s=i);var i}));var i=e.O();_N_E=i}]);