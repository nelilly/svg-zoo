import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Next from 'src/components/Next';
import Hero from 'src/components/Hero';
// import Gallery from 'src/components/Gallery';
// import Shelf from 'src/components/Shelf';
import { formatDate } from 'src/shared/functions/formatDate';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const PaintingPage = ({lastUpdated}) => {

  const [mediaWidth, setMediaWidth] = useState('360');

  const handleMediaWidth = (event) => {
    setMediaWidth(event.target.value);
  }

  const title = 'Painting SVGs: SVG ZOO';
  const description = 'Learn about using fills, strokes, transparencies, gradients, and patterns.'
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="Painting SVGs" image="/assets/images/painting_toucans.svg" description={description} />
          <section id="toc">
            <h2>Table of Contents</h2>
            <ul>
              <li>Fill</li>
              <li>Stroke</li>
              <li>color-interpolation-filters</li>
              <li>&lt;g&gt;</li>
              <li>&lt;defs&gt;</li>
              <li>&lt;style&gt;</li>
              <li>Gradients</li>
              <li>Patterns</li>
            </ul>
          </section>

          <section id="fill">
            <h2>Fill</h2>
            <p>The default properties for an SVG element is a black (#000) fill with no stoke.</p>
            <p><code>currentColor</code></p>
          </section>

          <section id="stroke">
            <h2>Stroke</h2>
            <p>If a stroke width is added, the default color for a stroke is black (#000).</p>
            <p><code>non-scaling-stroke</code></p>
            <p><code>currentColor</code></p>
          </section>

          <section id="color_interpolation_filters">
            <h2><code>color-interpolation-filters</code></h2>
            sRGB
            Indicates that color interpolation should occur in the sRGB color space.

            linearRGB
            Indicates that color interpolation should occur in the linearized RGB color space as described in the sRGB specification.
          </section>
          
          <section id="g">
            <h2>&lt;g&gt;</h2>
            <p>The &lt;g&gt; element allows you to group elements together and apply attributes, styles, filters collectively.</p>
            <pre><code>{`<g fill="white" stroke="grey" stroke-width="7.5" transform="translate(0 20)">
          <rect x="175" y="25" width="50" height="50" />
          <rect x="250" y="25" width="50" height="50" />
          <rect x="325" y="25" width="50" height="50" />
        </g>`}</code></pre>
            <figure>
              <svg viewBox="0 0 500 100">
                <rect x="25" y="25" width="50" height="50" />
                <rect x="175" y="25" width="50" height="50" />
                <g fill="white" stroke="grey" strokeWidth="7.5" transform="rotate(9, 500,100) translate(0 35)">
                  <rect x="100" y="25" width="50" height="50" />
                  <rect x="250" y="25" width="50" height="50" />
                  <rect x="325" y="25" width="50" height="50" />
                </g>
                <rect x="400" y="25" width="50" height="50" />
              </svg>
            </figure>
          </section>
          
          <section id="defs">
            <h2>&lt;defs&gt;</h2>
            <p>&lt;defs&gt; should contain graphical objects to be defined for later reuse. SVG gradients, patterns, masks, markers, clip paths, and filters are a subject of their own presentation.</p>
            <pre><code>{`<defs>
          <style>
            .go {
              fill: green;
            }
          </style>
          <linearGradient id="Gradient01">
            <stop offset="20%" stop-color="#39F" />
            <stop offset="90%" stop-color="#F3F" />
          </linearGradient>
          <pattern id="stripe" width="10" height="10" patternUnits="userSpaceOnUse" stroke="white" fill="none" stroke-width="1">
            <path fill="white" d="M0,0L10,5L0,10" />
          </pattern>
          <mask id="lionMask" maskUnits="userSpaceOnUse" >
            <image href="${process.env.pathPrefix}/assets/images/guides/lion_cracker.webp" x="55" y="15" width="200" height="200" viewBox="0 0 100 100" />
          </mask>
            <circle id="lionContainer" class="go" cx="75" cy="50" r="25" />
          <marker id="Triangle2" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto" stroke="none" fill="black" stroke-width="0">
            <path fill="white" d="M0,0L10,5L0,10z" />
          </marker>
          <clipPath id="myClip">
            <circle cx="420" cy="50" r="30" fill="green" />
          </clipPath>
          <symbol id="card" viewBox="0 0 100 100">
            <rect x="0" y="0" width="75" height="75" />
            <path d="M50 90 C -15 40, 10 5, 50 30 C 90 5, 110 40, 50 90z" fill="rgba(255,0,0,1)" />
          </symbol>
        </defs>
            `}</code></pre>
            
            <figure>
              <svg viewBox="0 0 560 100">
                <defs>
                  <style>{`
                    .go {
                      fill: green;
                    }
                  `}</style>
                  <linearGradient id="Gradient01">
                    <stop offset="20%" stopColor="#39F" />
                    <stop offset="90%" stopColor="#F3F" />
                  </linearGradient>
                  <pattern id="stripe" width="10" height="10" patternUnits="userSpaceOnUse" stroke="white" fill="none" strokeWidth="1">
                    <path d="M0,0L10,5L0,10" />
                  </pattern>
                  <mask id="lionMask" maskUnits="userSpaceOnUse" >
                    <image href={`${process.env.pathPrefix}/assets/images/guides/lion_cracker.webp`} x="55" y="15" width="100" height="100" viewBox="0 0 100 100" />
                  </mask>
                  <circle id="lionContainer" className="go" cx="75" cy="50" r="25" />
                  <marker id="Triangle2" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto" stroke="none" fill="white" strokeWidth="0">
                    <path d="M0,0L10,5L0,10z" />
                  </marker>
                  <clipPath id="myClip">
                    <circle cx="420" cy="50" r="30" fill="green" />
                  </clipPath>
                  <symbol id="card" viewBox="0 0 100 100">
                    <rect x="0" y="0" width="75" height="75" />
                    <path d="M50 90 C -15 40, 10 5, 50 30 C 90 5, 110 40, 50 90z" fill="rgba(255,0,0,1)" />
                  </symbol>
                </defs>
                <circle className="go" cx="50" cy="50" r="25" />
                <rect x="100" y="25" width="50" height="50" fill="url(#Gradient01)" />
                <rect x="175" y="25" width="50" height="50" fill="url(#stripe)" />
                <use href="#lionContainer" x="200" mask="url(#lionMask)"/>
                <image id="lionContainer" href={`${process.env.pathPrefix}/assets/images/guides/lion_cracker.webp`} x="390" y="15" width="100" height="100" viewBox="0 0 100 100" clipPath="url(#myClip)" />
                <line x1="325" y1="25" x2="375" y2="75" markerEnd="url(#Triangle2)" />
                <use href="#card" x="475" y="25" width="75" height="75"/>
              </svg>
            </figure>
          </section>
          
          <section id="style">
            <h2>&lt;style&gt;</h2>
            <p>CSS is supported in the SVG code.</p>
            <pre><code>{`<style>
  .circle1 {
    fill: rgba(255, 0, 0, 0.3);
  }
  .go {
    fill: green;
  }
  @media only screen and (min-width: 400px) {
    .small { display: none; }
  }
  @media only screen and (max-width: 400px) {
    .medium { display: none; }
  }
</style>
            `}</code></pre>
              <svg width="200" height="200" viewBox="0 0 100 100">
                <defs>
                  <style>{`
                    .circle1 {
                      fill: rgba(255, 0, 0, 0.3);
                    }
                    .go {
                      fill: green;
                    }
                    @media only screen and (min-width: 400px) {
                      .small { display: none; }
                    }
                    @media only screen and (max-width: 400px) {
                      .medium { display: none; }
                    }
                  `}</style>
                </defs>
                <g className="small">
                  <circle className="go circle1" cx="50" cy="50" r="25" />
                </g>
                <g className="medium">
                  <circle className="circle1" cx="50" cy="50" r="33" />
                  <circle className="circle1" cx="50" cy="50" r="25" />
                  <circle className="circle1" cx="50" cy="50" r="20" />
                </g>
              </svg>

            <p>Media queries continue to work within linked SVGs based on the width of the image container. In the image below, the image will change when its width is 400 pixels or larger.</p>
            
            <input type="range" id="mediaWidth" name="mediaWidth" value={mediaWidth} onChange={handleMediaWidth} min="320" max="640" style={{border: '.1rem', verticalAlign: 'middle', maxWidth: '320px', outline: 'none'}} /> {mediaWidth}px
            <label htmlFor="mediaWidth">Media Width</label>
            <div>
              {/* <svg width={mediaWidth} height={mediaWidth} viewBox="0,0 100,100">
                <defs>
                  <style>{`
                    .circle1 {
                      fill: rgba(255, 0, 0, 0.3);
                    }
                    .go {
                      fill: green;
                    }
                    @media only screen and (min-width: 400px) {
                      .small { display: none; }
                    }
                    @media only screen and (max-width: 400px) {
                      .medium { display: none; }
                    }
                  `}</style>
                </defs>
                <g className="small">
                  <circle className="go circle1" cx="50" cy="50" r="25" />
                </g>
                <g className="medium">
                  <circle className="circle1" cx="50" cy="50" r="33" />
                  <circle className="circle1" cx="50" cy="50" r="25" />
                  <circle className="circle1" cx="50" cy="50" r="20" />
                </g>
              </svg> */}
              <img width={mediaWidth} height="auto" src={`${process.env.pathPrefix}/assets/images/guides/mediaquery.svg`} />
            </div>
          </section>
          <section id="gradients">
            <h2>Gradients</h2>
          </section>
          <section id="patterns">
            <h2>Patterns</h2>
          </section>
          <section id="markers">
            <h2>Markers</h2>
          </section>
          <section id="masks">
            <h2>Masks</h2>
          </section>
          <section id="clip_paths">
            <h2>Clip-paths</h2>
          </section>
  
          <Next 
            title="Compositing SVGs"
            image="/assets/images/filter_bunny.svg"
            description="Learn how to use and combine advanced graphics filters on your SVGs."
            cta={{
              "url": "/guides/compositing-svgs",
              "lead": "Find out more about ",
              "label": "Compositing SVGs"
            }} />
        </article>
      </Layout>
    </>
  )
};

export default PaintingPage;

PaintingPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

