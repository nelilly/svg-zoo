import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
// import Next from 'src/components/Next';
import { formatDate } from 'src/shared/functions/formatDate';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const ProgrammingPage = ({lastUpdated}) => {
  const title = 'Programming SVGs: SVG ZOO';
  const description = 'Learn how to make your SVGs react, take input, and perform.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="Programming SVGs" image="/assets/images/program_mole.webp" description={description} />
          <section id="toc">
            <h2>Table of Contents</h2>
            <ul>
              <li>&lt;object&gt;</li>
              <li>&lt;switch&gt;</li>
              <li>&lt;script&gt;</li>
              <li>SVG Methods
                <ul>
                  <li>?</li>
                  <li>??</li>
                  <li>???</li>
                </ul>
              </li>
              <li>&lt;foreignObject&gt;</li>
            </ul>
          </section>
          <section id="object">
            <h2>&lt;object&gt;</h2>
            <p>The &lt;object&gt; element allows for interactivy in a linked file, much the same way that Adobe Flash used to be added to a page. Older (much older) browsers might require the use of &lt;embed&gt; to use the browser&rsquo;s SVG plugin.</p>
            <p>Some features of SVGs will not work unless the SVG is embedded directly in the HTML, or embedded onto the page using an &lt;object&gt; element.</p>
            <pre><code>&lt;object type="image/svg+xml" data="component.svg" width="100%" height="200" &gt;&lt;/object&gt;</code></pre>
            <object type="image/svg+xml" data={`${process.env.pathPrefix}/assets/images/guides/component.svg`} width="200" height="200" ></object>
            
            <p>Scripting and font imports don't work when the SVG is displayed using an &lt;img&gt; element.</p>
            <pre><code>&lt;img src="component.svg" width="100%" height="200" /&gt;</code></pre>
            <img src={`${process.env.pathPrefix}/assets/images/guides/component.svg`} width="200" height="200" />
          </section>
          <section id="switch">
            <h2>&lt;switch&gt;</h2>
            <p>&lt;switch&gt; is an SVG element that can be used to check for the existence of SVG features or language support.</p>
            <pre><code>{`
<switch>
  <text systemLanguage="es">Hola!</text>
  <text systemLanguage="en">Hello!</text>
  <text systemLanguage="hi">नमस्ते</text>
  <text systemLanguage="en-au">G'day!</text>
  <text systemLanguage="fr">Bonjour!</text>
  <text systemLanguage="en">I said, Hello!</text>
  <text>Fine then, I didn't want to say 'Hi' anyway.</text>
</switch>
            `}</code></pre>
            <figure>
              <svg width="40%" viewBox="-8 -50 200 66">
                <switch>
                  <text systemLanguage="es">Hola!</text>
                  <text systemLanguage="en">Hello!</text>
                  <text systemLanguage="hi">नमस्ते</text>
                  <text systemLanguage="en-au">G'day!</text>
                  <text systemLanguage="fr">Bonjour!</text>
                  <text systemLanguage="en">I said, Hello!</text>
                  <text>Fine then, I didn't want to say 'Hi' anyway.</text>
                </switch>
              </svg>
            </figure>

            <h3>requiredFeatures</h3>
            <p>The following switch statement was written to replace the animated SVGs with an animated gif in browsers that don&rsquo;t support the SVG animation feature.</p>
            <pre><code>{`
<switch>
  <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-animation">
    <circle class="loading-dot" cx="23" cy="50" r="8.9"/>
    <circle class="loading-dot" cx="50" cy="50" r="8.9"/>
    <circle class="loading-dot" cx="77.4" cy="50" r="8.9"/>
  </g>
  <image xlink:href="loading-dots-svg-backup.gif" x="0" y="0" height="100px" width="100px"></image>
</switch>
            `}</code></pre>

            <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.87)" stroke="none" width="400" height="400" viewBox="0 0 100 100">
              <style>{`
              @keyframes fadeIn {  from { fill: rgba(255, 255, 255, 0.1); } }
              .loading-dot { animation: fadeIn 0.999999s infinite alternate; stroke: none; fill: #fff;}
              .loading-dot:nth-of-type(2n) {animation-delay: 0.333333s;}
              .loading-dot:nth-of-type(3n) {animation-delay: 0.666666s;}
              .loading-dot:nth-of-type(4n) {animation-delay: 0.999999s;}
              `}</style>
              <circle cx="50" cy="50" r="46" fill="rgba(0, 0, 0, 0.87)"/>
              <switch>
                <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-animation">
                  <circle className="loading-dot" cx="23" cy="50" r="8.9"/>
                  <circle className="loading-dot" cx="50" cy="50" r="8.9"/>
                  <circle className="loading-dot" cx="77.4" cy="50" r="8.9"/>
                </g>
                <image href={`${process.env.pathPrefix}/assets/images/guides/loading-dots-svg-backup.gif`} x="0" y="0" height="100px" width="100px"></image>
              </switch>
            </svg>

            <h3>GIF included version</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.87)" stroke="none" width="400" height="400" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="rgba(0, 0, 0, 0.87)"/>
              <switch>
                <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#SVG-static">
                  <image href={`${process.env.pathPrefix}/assets/images/guides/loading-dots-svg-backup.gif`} x="0" y="0" height="100px" width="100px"></image>
                </g>
              </switch>
            </svg>
          </section>
          
          <section id="script">
            <h2>&lt;script&gt;</h2>
            <pre><code>&lt;script&gt;
          {`
  function change(event) {
    var radius = event.target.getAttribute("r") == 15 ? 30 : 15;
    event.target.setAttribute("r",radius);
  }
`}
        &lt;/script&gt;
            </code></pre>
            <figure>
              <svg width="200" height="200" viewBox="0 0 100 100" dangerouslySetInnerHTML={{ __html: `<script>
  function change(event) {
    var radius = event.target.getAttribute("r") == 15 ? 30 : 15;
    event.target.setAttribute("r",radius);
  }
  </script>
  <text class="draw" x="50" y="20" style="font-size:12px; text-anchor: middle; fill: white; stroke:none;">click the circles!</text>
  <circle cx="50" cy="60" r="30" onClick="change(event)" />
  <circle cx="20" cy="90" r="15" onClick="change(event)" />
  <circle cx="80" cy="90" r="15" onClick="change(event)" />` }} />
            </figure>
          </section>
          {/* <Next 
            title="Drawing SVGs"
            image="/assets/images/drawing_lion.svg"
            description="Learn about the basic coordinate system and elements to draw your SVGs."
            cta={{
              "url": "/guides/drawing-svgs",
              "lead": "Find out more about ",
              "label": "Drawing SVGs"
            }} /> */}
        </article>
      </Layout>
    </>
  )
};

export default ProgrammingPage;

ProgrammingPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

