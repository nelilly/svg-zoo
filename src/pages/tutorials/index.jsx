import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Shelf from 'src/components/Shelf';
import { formatDate } from 'src/shared/functions/formatDate';
import {
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

const TutorialsPage = ({lastUpdated}) => {
  const title = 'SVG Tutorials: SVG ZOO';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="SVG Tutorials" image="" description="A series of tutorials, examples, and exercises exploring the different features and uses of SVG images." />

          <section>
            <ul>
              <li>Drawing
                <ul>
                  <li><Link href={`${process.env.pathPrefix}/tutorials/hand-coded-icons/`}>Hand-coded Icons</Link></li>
                </ul>
              </li>
            </ul>
          </section>
          <section id="to_do">
            <h2>To Do:</h2>
            <ul>
              <li>Drawing
                <ul>
                  <li>SVG Typography</li>
                  <li>SVG Sprites</li>
                  <li>Using Symbols, Lines, and Markers: Build a Flow Chart</li>
                </ul>
              </li>
              <li>Painting
                <ul>
                  <li>Different Strokes: currentColor, non-scaling-stroke, dash-array, linecaps</li>
                  <li>Making Forms (Using Gradients)</li>
                  <li>Patterns (Escher, The Memphis Style)</li>
                </ul>
              </li>
              <li>Compositing
                <ul>
                  <li>Word Art (Glitch, Neon, ...)</li>
                  <li>Clouds (Turbulence)</li>
                  <li>Lighting Effects</li>
                  <li>Making Reference Files (masks.svg, clips.svg, filters.svg, etc.)</li>
                </ul>
              </li>
              <li>Animating
                <ul>
                  <li>Animating the Navigation Icon</li>
                  <li>Animated Lines</li>
                  <li>Animated Logo</li>
                  <li>SMIL</li>
                  <li>Animating to a Path</li>
                  <li>An SVG Orrery</li>
                </ul>
              </li>
              <li>Programming
                <ul>
                  <li>Programming a Game (Boop-a-Mole)</li>
                  <li>Generative Art</li>
                  <li>Particles in SVG</li>
                </ul>
              </li>
            </ul>
            <h3>SVG Solutions</h3>
            <ul>
              <li>SVG Favicons</li>
              <li>CSS Variables and SVG Icons</li>
              <li>Charts
                <ul>
                  <li>Gauge and Bullet Graphs</li>
                  <li>Bar Graph</li>
                  <li>Dot Plot</li>
                  <li>Line Graph and Spark Lines</li>
                  <li>Scatter Plot</li>
                  <li>Box Plot</li>
                  <li>Heat Map</li>
                  <li>Circle Pack and Tree Maps</li>
                </ul>
              </li>
              <li>SVG in Canvas</li>
              <li>Using Illustrator for Drawing SVGs</li>
            </ul>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default TutorialsPage;

TutorialsPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

