_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"0AJX":function(e,t,i){"use strict";i.r(t),i.d(t,"__N_SSG",(function(){return a}));var c=i("nKUr"),r=i("g4pe"),n=i.n(r),s=i("ntAx"),l=i("ptYI"),o=i("j3u0"),a=!0;t.default=function(e){var t=e.lastUpdated,i="Compositing SVGs: SVG ZOO";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(n.a,{children:[Object(c.jsx)("title",{children:i}),Object(c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0"}),Object(c.jsx)("meta",{property:"og:title",content:i},"title")]}),Object(c.jsx)(s.a,{lastUpdated:t,children:Object(c.jsxs)("article",{children:[Object(c.jsx)(l.a,{title:"Compositing SVGs",image:"/assets/images/filter_bunny.svg",description:"Learn how to use and combine advanced graphics filters on your SVGs."}),Object(c.jsxs)("section",{id:"toc",children:[Object(c.jsx)("h2",{children:"Table of Contents"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Filters"}),Object(c.jsx)("li",{children:"Filter keywords: SourceGraphic, SourceAlpha, FillPaint, FillStroke, etc."}),Object(c.jsx)("li",{children:"Filter Primitives"}),Object(c.jsx)("li",{children:"Color + Light Filters"}),Object(c.jsx)("li",{children:"Displacement Filters"}),Object(c.jsx)("li",{children:"Combining Filter Primitives"})]})]}),Object(c.jsxs)("aside",{className:"warning",children:[Object(c.jsx)("h3",{children:"Can I Use?"}),Object(c.jsx)("p",{children:"Be cautious about using SVG filters directly on HTML elements."}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://caniuse.com/svg-filters",children:"Can I Use? SVG Filters"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://caniuse.com/svg-html",children:"Can I Use? SVG effects for HTML"})})]})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Filter Effects"}),Object(c.jsx)("p",{}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset",children:"feOffset"})}),Object(c.jsx)("p",{children:'"The <feOffset> SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur",children:"feGaussianBlur"})}),Object(c.jsx)("p",{children:'"The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow",children:"feDropShadow"})}),Object(c.jsx)("p",{children:"The <feDropShadow> SVG filter primitive creates a drop shadow."}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:'<feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0" flood-color="pink" flood-opacity="0.5"/>'})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage",children:"feImage"})}),Object(c.jsx)("p",{children:'"The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)"'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile",children:"feTile"})}),Object(c.jsx)("p",{children:'"The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a <pattern>."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Color + Light Filters"}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood",children:"feFlood"})}),Object(c.jsx)("p",{children:'"The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",children:"feColorMatrix"})}),Object(c.jsx)("p",{children:'"The <feColorMatrix> SVG filter element changes colors based on a transformation matrix. Every pixel\'s color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting",children:"feDiffuseLighting"})}),Object(c.jsx)("p",{children:'"The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h4",{children:"fePointLight"}),Object(c.jsx)("h4",{children:"feDistantLight"}),Object(c.jsx)("h4",{children:"feSpotLight"}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting",children:"feSpecularLighting"})}),Object(c.jsx)("p",{children:'"The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Displacement Filters"}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap",children:"feDisplacementMap"})}),Object(c.jsx)("p",{}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence",children:"feTurbulence"})}),Object(c.jsx)("p",{}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",children:"feConvolveMatrix"})}),Object(c.jsx)("p",{}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology",children:"feMorphology"})}),Object(c.jsx)("p",{}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer",children:"feComponentTransfer"})}),Object(c.jsx)("p",{}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Combining Filter Primitives"}),Object(c.jsx)("p",{children:"The real power of SVG filters comes in when we begin blending, merging, and compositing filters."}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/",children:"feBlend"})}),Object(c.jsx)("p",{children:'"The SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite",children:"feComposite"})}),Object(c.jsx)("p",{children:'"This filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor and lighter."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge",children:"feMerge"})}),Object(c.jsx)("p",{children:'"The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a <feMergeNode> child."'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})}),Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode",children:"feMergeNode"})}),Object(c.jsx)("p",{children:'"The <feMergeNode> takes the result of another filter to be processed by its parent <feMerge>"'}),Object(c.jsx)("pre",{children:Object(c.jsx)("code",{children:""})})]}),Object(c.jsx)(o.a,{title:"Animating SVGs",image:"/assets/images/animation_bee.svg",description:"Learn how to fade, transform, and make your SVGs dance.",cta:{url:"/guides/animating-svgs",lead:"Find out more about ",label:"Animating SVGs"}})]})})]})}},"8oxB":function(e,t){var i,c,r=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(e){if(i===setTimeout)return setTimeout(e,0);if((i===n||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:n}catch(e){i=n}try{c="function"===typeof clearTimeout?clearTimeout:s}catch(e){c=s}}();var o,a=[],h=!1,d=-1;function j(){h&&o&&(h=!1,o.length?a=o.concat(a):d=-1,a.length&&b())}function b(){if(!h){var e=l(j);h=!0;for(var t=a.length;t;){for(o=a,a=[];++d<t;)o&&o[d].run();d=-1,t=a.length}o=null,h=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===s||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];a.push(new f(e,t)),1!==a.length||h||l(b)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"I+BL":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/compositing-svgs",function(){return i("0AJX")}])},"OgM+":function(e,t,i){e.exports={next:"style_next__3xtOI",featuredImage:"style_featuredImage__m-iAh",cta:"style_cta__2dVuQ"}},j3u0:function(e,t,i){"use strict";var c=i("nKUr"),r=i("YFqc"),n=i.n(r),s=i("q3w0"),l=i("OgM+");t.a=function(e){var t=e.image,i=e.title,r=e.description,o=e.cta;return Object(c.jsxs)("aside",{className:"".concat(l.next),children:[Object(c.jsx)("div",{className:l.featuredImage,children:Object(c.jsx)("img",{src:"".concat(t),alt:"",preload:"true",layout:"fill",objectfit:"cover",objectposition:"center"})}),Object(c.jsx)("div",{className:l.container,children:Object(c.jsxs)("div",{className:l.card,children:[Object(c.jsx)("h2",{className:l.cardTitle,children:Object(c.jsx)(n.a,{href:Object(s.a)(o.url),children:i})}),Object(c.jsx)("p",{className:l.cardDescription,children:r}),o&&Object(c.jsxs)("p",{className:"cardCta",children:[o.lead,Object(c.jsx)(n.a,{href:Object(s.a)(o.url),children:Object(c.jsx)("a",{href:Object(s.a)(o.url),className:l.cardCta,children:o.label})})]})]})})]})}},ptYI:function(e,t,i){"use strict";var c=i("nKUr"),r=i("w78I");t.a=function(e){var t=e.title,i=e.image,n=e.description,s=i&&"url(".concat(i,")");return Object(c.jsxs)("header",{className:r.hero,style:{backgroundImage:"".concat(s)},children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("p",{className:r.clip,children:n}),Object(c.jsx)("svg",{children:Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:"zoo-mask",clipPathUnits:"objectBoundingBox",children:Object(c.jsx)("path",{d:"M0.99514226231783,0.91327124563446c-0.0048577376821652,0.083236321303842-0.058292852185982,0.080325960419092-0.11450381679389,0.076251455180442c-0.034004163775156-0.0023282887077998-0.067314365024289,0.0064027939464494-0.10131852879944,0.0046565774155995c-0.028452463566967-0.0011641443538999-0.056904927133935-0.0064027939464494-0.086051353226926-0.0075669383003492c-0.052741151977793-0.0029103608847497-0.10340041637752,0.0075669383003492-0.15614156835531,0.011641443538999c-0.056904927133935,0.0046565774155995-0.10964607911173-0.0087310826542491-0.16516308119362-0.010477299185099c-0.0617626648161-0.0017462165308498-0.12074947952811,0.017462165308498-0.18320610687023,0.011641443538999c-0.038861901457321-0.0034924330616997-0.13324080499653,0.009895227008149-0.16377515614157-0.023864959254948c-0.029146426092991-0.033178114086147-0.015267175572519-0.13329452852154-0.019430950728661-0.17636786961583c-0.0069396252602359-0.068684516880093,0.003469812630118-0.13562281722934,0.003469812630118-0.20430733410943c0-0.082654249126892-0.010409437890354-0.16530849825378-0.0055517002081888-0.24796274738068c0.003469812630118-0.068684516880093-0.0062456627342124-0.13504074505239-0.003469812630118-0.20314318975553c0.0013879250520472-0.035506402793946-0.0027758501040944-0.089639115250291,0.020818875780708-0.11757857974389c0.027758501040944-0.031431897555297,0.078417765440666-0.026775320139697,0.11311589174185-0.022700814901048C0.19222761970854,0.0093131548311991,0.25121443442054,0.011641443538999,0.30950728660652,0.015715948777648c0.065926439972241,0.0046565774155995,0.12907702984039-0.017462165308498,0.19500346981263-0.009895227008149c0.053435114503817,0.0058207217694994,0.10340041637752,0.0034924330616997,0.15683553088133,0.0011641443538999c0.055517002081888-0.0023282887077998,0.11103400416378,0.0058207217694994,0.16655100624566,0.0040745052386496c0.041637751561416-0.0011641443538999,0.11727966689799-0.011059371362049,0.147120055517,0.031431897555297c0.018043025676613,0.025611175785797,0.0090215128383067,0.071594877764843,0.0097154753643303,0.10186263096624c0.00069396252602359,0.032013969732247,0.0055517002081888,0.062863795110594,0.0076335877862595,0.094877764842841c0.0048577376821652,0.065774155995343,0.0013879250520472,0.13213038416764,0.0020818875780708,0.19790454016298c0.00069396252602359,0.035506402793946,0.0048577376821652,0.072176949941793,0.0013879250520472,0.10768335273574c-0.003469812630118,0.038416763678696-0.013185287994448,0.073923166472643-0.012491325468425,0.11292200232829c0.00069396252602359,0.048894062863795,0.014573213046495,0.09604190919674,0.015961138098543,0.14493597206054C1.000693962526,0.83934807916182,0.99722414989591,0.87660069848661,0.99514226231783,0.91327124563446z"})})})})]})}},q3w0:function(e,t,i){"use strict";(function(e){i.d(t,"a",(function(){return c}));var c=function(t){return t.includes("http")?t:"".concat(e.env.ASSET_PREFIX).concat(t)}}).call(this,i("8oxB"))},w78I:function(e,t,i){e.exports={hero:"style_hero__1ZzTY",clip:"style_clip__33qGc"}}},[["I+BL",0,2,1,3]]]);