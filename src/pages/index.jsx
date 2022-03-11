import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Directory from 'src/components/Directory';
import Shelf from 'src/components/Shelf';
import { formatDate } from 'src/shared/functions/formatDate';
import {
  guides,
  books,
} from 'src/data/home.json';


const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

console.log('Thanks for visiting! Check out the Colophon if you\'re interested in how this site is put together: https://nelilly.github.io/svg-zoo/colophon');

const HomePage = ({lastUpdated}) => {
  const title = 'SVG ZOO: an establishment that maintains a collection of wild SVGs for study, conservation, and display to the public.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          {/* <Jumbotron items={jumbotron} /> */}
          
          {/* <section>
            <h2>SVG News</h2>
          </section> */}
          {/* New Exhibits */}
          <Hero title="SVG ZOO" image="/assets/images/home_title.svg" description="The SVG ZOO is an establishment that maintains a collection of wild SVGs for study, conservation, and display to the public. It was created to explore the amazing and wonderful complexity that can be found in Scalable Vector Graphics." />

          <section>
            <h2>SVG Guides</h2>
            <p>A series of guides exploring the features of SVG images.</p>
            {
              guides.map(item => {
                return <Directory id={item.id} key={item.id} image={item.image} title={item.title} description={item.description} cta={item.cta} />
              })
            }
          </section>

          <section>
            <h2>SVG Tutorials</h2>
            <p>A series of tutorials, examples, and exercises exploring the different features and uses of SVG images.</p>
            <ul>
              <li><Link href={`${process.env.pathPrefix}/tutorials/hand-coded-icons/`}>Hand-coded Icons</Link></li>
            </ul>
          </section>

          <section>
            <h2>SVG Libraries</h2>
            <p>SVG libraries for gradients, patterns, and filters.</p>
            <ul>
              <li><Link href={`${process.env.pathPrefix}/libraries/gradients/`}>Gradients</Link></li>
              <li><Link href={`${process.env.pathPrefix}/libraries/patterns/`}>Patterns</Link></li>
              <li><Link href={`${process.env.pathPrefix}/libraries/filters/`}>Filters</Link></li>
            </ul>
          </section>

          <section>
            <h2>SVG Tools</h2>
            <p>SVG tools, generators, helpers, and visualizations.</p>
            <ul>
              <li><Link href={`${process.env.pathPrefix}/tools/arc-path-visualizer/`}>Arc Path Visualizer</Link></li>
              <li><Link href={`${process.env.pathPrefix}/tools/viewbox-visualizer/`}>ViewBox Visualizer</Link></li>
              <li><Link href={`${process.env.pathPrefix}/tools/svg-to-data-uri-converter/`}>SVG to Data URI Converter</Link></li>
              {/* <li>feColorMatrix Visualizer</li> */}
              {/* <li>feConvolveMatrix Visualizer</li> */}
              {/* <li>feTurbulence Visualizer</li> */}
              {/* <li>SVG Gradients Generator</li> */}
              {/* <li>SVG Border Image Generator</li> */}
              {/* <li>SVG Duotone Generator</li> */}
            </ul>
          </section>
          
          {/* <section>
            <h2>Table of Contents</h2>
            
            <ul>
              <li>
                <h3>Understanding SVGs</h3>
                <ul>
                  <li>What is a vector</li>
                  <li>Can I Use?</li>
                  <li>How to use
                    <ul>
                      <li>&lt;object&gt;</li>
                      <li>&lt;img&gt;</li>
                      <li>data URL</li>
                      <li>inline</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Drawing SVGs</h3>
                <ul>
                  <li>
                    <h4>The SVG Drawing Space</h4>
                    <ul>
                      <li>&lt;svg&gt;The SVG element
                      </li>
                      <li>namespace</li>
                      <li>Coordinate system</li>
                      <li>The <code>viewBox</code></li>
                    </ul>
                  </li>
                  <li>
                    <h4>Drawing Elements</h4>
                    <ul>
                      <li>&lt;line&gt;</li>
                      <li>&lt;circle&gt;</li>
                      <li>&lt;ellipse&gt;</li>
                      <li>&lt;rect&gt;</li>
                      <li>&lt;polygon&gt;</li>
                      <li>&lt;path&gt;
                        <ul>
                          <li>arc</li>
                          <li>beziér</li>
                        </ul>
                      </li>
                      <li><code>transform</code> Attribute</li>
                    </ul>
                  </li>
                  <li>
                    <h4>Object Elements</h4>
                    <ul>
                      <li>&lt;text&gt;</li>
                      <li>&lt;image&gt;</li>
                      <li>&lt;symbol&gt;</li>
                      <li>&lt;use&gt;</li>
                      <li>&lt;foreignObject&gt;</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Painting SVGs</h3>
                <ul>
                  <li>&lt;g&gt;</li>
                  <li>&lt;defs&gt;</li>
                  <li>&lt;style&gt;</li>
                  <li>Fill and Stroke</li>
                  <li>color-interpolation-filters</li>
                  <li>Gradients</li>
                  <li>Patterns</li>
                </ul>
              </li>
              <li>
                <h3>Compositing SVGs</h3>
                <ul>
                  <li>Filters</li>
                  <li>Filter keywords: SourceGraphic, SourceAlpha, FillPaint, FillStroke, etc.</li>
                  <li>Filter Primitives</li>
                  <li>Combining Filter Primitives</li>
                  <li>Color + Light Filters</li>
                  <li>Displacement Filters</li>
                </ul>
              </li>
              <li>
                <h3>Animating SVGs</h3>
                <ul>
                  <li>CSS Animation</li>
                  <li>transforms</li>
                  <li>SMIL</li>
                </ul>
              </li>
              <li>
                <h3>Programming SVGs</h3>
                <ul>
                  <li>&lt;object&gt;</li>
                  <li>&lt;switch&gt;</li>
                  <li>&lt;script&gt;</li>
                  <li>
                    <h4>SVG Methods</h4>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </li>
                  <li>&lt;foreignObject&gt;</li>
                </ul>
              </li>
            </ul>
          </section> */}
          {/* <section>
            <h2>Related Topics</h2>
            <p>Mixing SVGs</p>
            <p>Performance</p>
            <p>Accessibility in SVGs</p>
            <p>Tools</p>
            <p>Applications</p>
            <p>Resources</p>
          </section> */}
        </article>

        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default HomePage;

HomePage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};
