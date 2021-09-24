import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Next from 'src/components/Next';
import { formatDate } from 'src/shared/functions/formatDate';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const CompositingPage = ({lastUpdated}) => {
  const title = 'Compositing SVGs: SVG ZOO';
  const description = 'Learn how to use and combine advanced graphics filters on your SVGs.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="Compositing SVGs" image="/assets/images/filter_bunny.svg" description={description} />
          <section id="toc">
            <h2>Table of Contents</h2>
            <ul>
              <li>Filters</li>
              <li>Filter keywords: SourceGraphic, SourceAlpha, FillPaint, FillStroke, etc.</li>
              <li>Filter Primitives</li>
              <li>Color + Light Filters</li>
              <li>Displacement Filters</li>
              <li>Combining Filter Primitives</li>
            </ul>
          </section>
          <aside className="warning">
            <h3>Can I Use?</h3>
            <p>Be cautious about using SVG filters directly on HTML elements.</p>
            <ul>
              <li><a href="https://caniuse.com/svg-filters">Can I Use? SVG Filters</a></li>
              <li><a href="https://caniuse.com/svg-html">Can I Use? SVG effects for HTML</a></li>
            </ul>
          </aside>
          <section>
            <h2>Filter Effects</h2>
            <p></p>
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset">feOffset</a></h3>
            <p>"The &lt;feOffset&gt; SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes."</p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur">feGaussianBlur</a></h3>
            <p>"The &lt;feGaussianBlur&gt; SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve."</p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow">feDropShadow</a></h3>
            <p>The &lt;feDropShadow&gt; SVG filter primitive creates a drop shadow.</p>
            <pre><code>{`<feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0" flood-color="pink" flood-opacity="0.5"/>`}</code></pre>

            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage">feImage</a></h3>
            <p>"The &lt;feImage&gt; SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)"</p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile">feTile</a></h3>
            <p>"The &lt;feTile&gt; SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a &lt;pattern&gt;."</p>
            <pre><code>{``}</code></pre>
            
          </section>
          <section>
            <h2>Color + Light Filters</h2>
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood">feFlood</a></h3>
            <p>"The &lt;feFlood&gt; SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity."</p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix">feColorMatrix</a></h3>
            <p>"The &lt;feColorMatrix&gt; SVG filter element changes colors based on a transformation matrix. Every pixel's color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color."</p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting">feDiffuseLighting</a></h3>
            <p>"The &lt;feDiffuseLighting&gt; SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map."</p>
            <pre><code>{``}</code></pre>
            
            <h4>fePointLight</h4>
            <h4>feDistantLight</h4>
            <h4>feSpotLight</h4>
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting">feSpecularLighting</a></h3>
            <p>"The &lt;feSpecularLighting&gt; SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model."</p>
            <pre><code>{``}</code></pre>
            
          </section>
          <section>
            <h2>Displacement Filters</h2>
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap">feDisplacementMap</a></h3>
            <p></p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence">feTurbulence</a></h3>
            <p></p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix">feConvolveMatrix</a></h3>
            <p></p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology">feMorphology</a></h3>
            <p></p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer">feComponentTransfer</a></h3>
            <p></p>
            <pre><code>{``}</code></pre>
            
          </section>
          <section>
            <h2>Combining Filter Primitives</h2>
            <p>The real power of SVG filters comes in when we begin blending, merging, and compositing filters.</p>
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/">feBlend</a></h3>
            <p>"The SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute."</p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite">feComposite</a></h3>
            <p>"This filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor and lighter."</p>
            <pre><code>{``}</code></pre>
            
            <h3><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge">feMerge</a></h3>
            <p>"The &lt;feMerge&gt; SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a &lt;feMergeNode&gt; child."</p>
            <pre><code>{``}</code></pre>
            
            <h4><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode">feMergeNode</a></h4>
            <p>"The &lt;feMergeNode&gt; takes the result of another filter to be processed by its parent &lt;feMerge&gt;"</p>
            <pre><code>{``}</code></pre>
            
          </section>

          <Next 
            title="Animating SVGs"
            image="/assets/images/animation_bee.svg"
            description="Learn how to fade, transform, and make your SVGs dance."
            cta={{
              "url": "/guides/animating-svgs",
              "lead": "Find out more about ",
              "label": "Animating SVGs"
            }} />
        </article>
      </Layout>
    </>
  )
};

export default CompositingPage;

CompositingPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

