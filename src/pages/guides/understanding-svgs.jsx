import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { updateUrl } from 'src/shared/updateUrl';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Next from 'src/components/Next';
import { formatDate } from 'src/shared/functions/formatDate';
import {
  guides,
} from 'src/data/home.json';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const UnderstandingPage = ({lastUpdated}) => {
  const title = 'Understanding SVGs: SVG ZOO';
  const description = 'Learn about SVG anatomy, usage, benefits, and short comings.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="Understanding SVGs" image="/assets/images/anatomy_frog.svg" description={description} />
          <section id="toc">
            <h2>Table of Contents</h2>
            <ul>
              <li>What is an SVG?</li>
              <li>SVG Benefits</li>
              <li>Browser Support</li>
              <li>
                <details>
                  <summary>How to Use SVGs</summary>
                  <ul>
                    <li>&lt;object&gt;</li>
                    <li>&lt;img&gt;</li>
                    <li>Inline SVG in HTML</li>
                    <li>CSS Background with data URI</li>
                  </ul>
                </details>
              </li>
              <li>SVG Elements</li>
            </ul>
          </section>
          <section id="svg">
            <h2>What is an SVG?</h2>
            <img src={`${process.env.pathPrefix}/assets/images/svg-logo.svg`} alt="Scalable Vector Graphics" />
            <p>SVG stands for Scalable Vector Graphics. An SVG is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. The <a href="https://www.w3.org/TR/SVG11/">SVG specification</a> is an open standard developed by the World Wide Web Consortium (W3C) since 1999.</p> 
            
            <p>Like HTML pages, SVG images and their behaviors are defined using elements. Learning to code in SVG is almost as easy as learning to code in HTML.</p>
          </section>

          <section id="benefits">
            <h2>SVG Benefits</h2>
            <p>The use of SVGs is preferable over other image formats in the following contexts:</p>

            <h3>Simple, Graphic, or Abstract Images</h3>
            <p>When displaying vector logos, icons, charts, figures, and other geometric designs.</p>

            <h3>Resolution Independent Display</h3>
            <p>Images that need to be displayed in multiple sizes, screens, and/or a variety of devices.</p>
            <figure>
              <svg viewBox="0,0 200,100">
                <defs>
                <clipPath id="rasterClip">
                  <circle cx="70" cy="70" r="20" />
                </clipPath>
                <clipPath id="vectorClip">
                  <circle cx="170" cy="70" r="20" />
                </clipPath>
                </defs>
                <image href={`${process.env.pathPrefix}/assets/images/guides/circle_raster.png`} height="100%" width="50%" />
                <g clipPath="url(#rasterClip)">
                  <image href={`${process.env.pathPrefix}/assets/images/guides/circle_raster.png`} height="100%" width="50%" transform="translate(-220,-220) scale(4)" style={{imageRendering: 'pixelated'}} />
                  <circle cx="70" cy="70" r="20" fill="none" stroke="#000" strokeWidth="1" />
                </g>
                <circle cx="150" cy="50" r="33" />
                <g clipPath="url(#vectorClip)">
                  <circle cx="170" cy="70" r="20" fill="#0D4863" stroke="none" />
                  <circle cx="150" cy="50" r="33" transform="translate(-520,-220) scale(4)" />
                  <circle cx="170" cy="70" r="20" fill="none" stroke="#000" strokeWidth="1" />
                </g>
                <g dominantBaseline="middle" textAnchor="middle">
                  <text x="50" y="90" fontSize="6" strokeWidth="0" fill="#fff">Raster</text>
                  <text x="150" y="90" fontSize="6" strokeWidth="0" fill="#fff">Vector</text>
                </g>
                  {/* <circle cx="70" cy="70" r="20" /> */}
              </svg>
              <figcaption>Comparing Raster vs. Vector images.</figcaption>
            </figure>
            <p>Vector images appear the same on low and high resolution displays. Vector images that are sent to print will use the full resolution that the printer is capable of.</p>
            
            <h3>Reduced File Sizes</h3>
            <p>In addition to all that, SVGs can be gzipped for smaller file sizes when sent with a gzip compatible server.</p>
            
            <h3>Easily Editable and Programmable</h3>
            <p>Because SVGs are just code, they&rsquo;re excellent for graphics that need to be easily updated, edited, or programmatically changed.</p>
            
            <h3>Animations</h3>
            <p>For graphics requiring animations, transitions, and motions using CSS, JavaScript, or SMIL.</p>
            
            <h3></h3>
            <p></p>
            
          </section>

          <section id="browser_support">
            <h2>SVG Browser Support</h2>
            <p>Basic support for SVGs is available in all major browsers.</p>
            <figure>
              <img src={`${process.env.pathPrefix}/assets/images/guides/caniuse_basic_support.webp`} alt="Can I Use? SVG Browser Support Matrix" />
              <figcaption>SVG browser support statistics as of February 1, 2022</figcaption>
            </figure>
            <p>Visit <a href="http://caniuse.com/#search=svg">Can I Use? SVGs</a> for a full list of SVG features and their availability in different browsers.</p>
          </section>

          <section id="svg_elements">
            <h2>SVG Elements</h2>
            <p>A brief overview of SVG capabilities include drawing vector shapes (e.g., paths consisting of straight lines and curves), importing images, and formatting text into graphical objects. The graphical objects can be grouped, styled, transformed and composited (combined using filter effects). The SVG feature set includes nested transformations, clipping paths, alpha masks, filter effects, and template objects (symbols).</p>
            <h3>Drawing Elements</h3>
            <p>These are drawing primitives for drawing vector shapes (e.g., paths consisting of straight lines and curves).</p>
            <ul>
              <li>&lt;line&gt;</li>
              <li>&lt;rect&gt;</li>
              <li>&lt;circle&gt;</li>
              <li>&lt;polygon&gt;</li>
              <li>&lt;path&gt;</li>
            </ul>
            <p>These are drawing primitives are used to add and format graphical objects.</p>
            <ul>
              <li>&lt;text&gt;</li>
              <li>&lt;image&gt;</li>
              <li>&lt;symbol&gt;</li>
              <li>&lt;foreignObject&gt;</li>
            </ul>
            <h3>Painting Elements</h3>
            <p>Elements that are used to change the paint (fills and strokes) and styles of SVG objects.</p>
            <ul>
              <li>&lt;g&gt;</li>
              <li>&lt;defs&gt;</li>
              <li>&lt;style&gt;</li>
              <li>&lt;linearGradient&gt;</li>
              <li>&lt;radialGradient&gt;</li>
            </ul>
            <h3>Filter Elements</h3>
            <p>Graphic image filter effects for SVG objects, such as drop shadows, blurring, color manipulation and compositing.</p>
            <ul>
              <li>&lt;feOffset&gt;</li>
              <li>&lt;feGaussianBlur&gt;</li>
              <li>&lt;feDropShadow&gt;</li>
              <li>&lt;feColorMatrix&gt;</li>
              <li>&lt;feTurbulence&gt;</li>
              <li>&lt;feBlend&gt;</li>
            </ul>
            <aside className="warning">
              <p>These features will be explored in more depth in the other guides:</p>
              <ul>
                {
                  // .filter(item => item.id === 3)
                  guides.filter(item => item.id !== 1).map(item => {
                    return <li key={`li${item.id}`}>
                      <Link href={updateUrl(item.cta.url)}>{item.title}</Link>
                      <p>{item.description}</p>
                    </li>
                  })
                }
              </ul>
            </aside>
          </section>

          <section id="usage">
            <h2>How to Use SVGs</h2>
            <p>Once you have an SVG image, there are a number of ways that you can get the image onto your page.</p>
            <p>The most direct way to get your image onto your HTML document is by using either the &lt;img&gt; or &lt;object&gt; elements.</p>
            
            <h3>The &lt;img&gt; element</h3>
            <pre><code>&lt;img src=&quot;image.svg&quot; /&gt;</code></pre>
            <p>Interactive scripts and font imports will not work when SVGs are embedded this way.</p>

            <h3>The &lt;object&gt; element</h3>
            <pre><code>&lt;object type=&quot;image/svg+xml&quot; data=&quot;image.svg&quot; /&gt;&lt;/object&gt;</code></pre>
            <p>Using the &lt;object&gt; allows you to take advantage of scripts and font imports built into the SVG.</p>

            <h3>Inline SVG in HTML</h3>
            <p><a href="https://caniuse.com/svg-html5">Can I Use? Inline SVG in HTML</a></p>
            <p>{/* You can open your SVG image in any text editor and paste that code directly into your HTML document. */}Browsers support the ability to write SVG elements directly into your HTML code, without the need for an &lt;img&gt; or &lt;object&gt; element. Written in this way CSS styles and JavaScript scripts can have direct access to the SVG, just like any other HTML element. </p>
            <svg width="200" height="200" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="25" />
            </svg>
            <pre><code>{`<svg width="200" height="200" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="25" />
</svg>`}</code></pre>
            <p>Note that when you include the SVG code in your HTML document you no longer need to include the <Link href="#namespace">SVG namespace</Link> within the &lt;svg&gt; element.</p>

            <section id="data_uri">
              <h3>CSS Background with data URI</h3>
              <p><a href="https://caniuse.com/svg-css">Can I Use? SVG in CSS backgrounds</a></p>
              <p>Simple SVGs without interactive features or font imports can be encoded into a data URI, and used as an embeded image in your CSS.</p>
              <style>
                {`.icon {
                  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3ccircle cx='20' cy='20' r='20' fill='red' /%3e%3ctext fill='white' x='17' y='25'%3e?%3c/text%3e%3c/svg%3e");
                  background-size: 56px 56px;
                  background-repeat: no-repeat;
                  border: 1px solid black;
                  height: 300px;
                  width: 300px;
                }`}
              </style>
              <div className="icon"></div>
              <pre><code>{`<style>
    .icon {
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3e%3ccircle cx='20' cy='20' r='20' fill='red' /%3e%3ctext fill='white' x='17' y='25'%3e!%3c/text%3e%3c/svg%3e");
      background-size: 56px 56px;
      background-repeat: no-repeat;
    }
  </style>`}</code></pre>
              <p>Use the <Link href={`${process.env.pathPrefix}/tools/svg-to-data-uri-converter/`}>SVG to Data URI Converter</Link> to get an encoded data uri.</p>
            </section>
          </section>
          <Next 
            title="Drawing SVGs"
            image="/assets/images/drawing_lion.svg"
            description="Learn about the basic coordinate system and elements to draw your SVGs."
            cta={{
              "url": "/guides/drawing-svgs",
              "lead": "Find out more about ",
              "label": "Drawing SVGs"
            }} />
        </article>
      </Layout>
    </>
  )
};

export default UnderstandingPage;

UnderstandingPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

