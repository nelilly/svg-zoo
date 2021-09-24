import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Breadcrumbs from 'src/components/Breadcrumbs';
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

const GradientsPage = ({lastUpdated}) => {
  const title = 'SVG Gradients: SVG Libraries: SVG ZOO';
  const description = 'SVG libraries of gradients.'
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Breadcrumbs labels={title} />
          <header>
            <h1>SVG Gradients</h1>
            <p>{description}</p>
          </header>
          <section>
            <h2>Linear Gradients</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <linearGradient id="twoStopLinearGradient">
                      <stop offset="0" stopColor="#0F0"/>
                      <stop offset="1" stopColor="#00F"/>
                    </linearGradient>
                  </defs>
                  <rect fill="url(#twoStopLinearGradient)" width="100%" height="100"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <linearGradient id="twoStopReflectLinearGradient" spreadMethod="reflect">
                      <stop offset="0" stopColor="#0F0"/>
                      <stop offset=".5" stopColor="#00F"/>
                      <stop offset="1" stopColor="#0F0"/>
                    </linearGradient>
                  </defs>
                  <rect fill="url(#twoStopReflectLinearGradient)" width="100%" height="100"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <linearGradient id="rainbowSegmentGradient">
                      <stop offset="16.666%" stopColor="hsl(0,80%,50%)"/>
                      <stop offset="16.666%" stopColor="hsl(60,80%,50%)"/>
                      <stop offset="33.333%" stopColor="hsl(60,80%,50%)"/>
                      <stop offset="33.333%" stopColor="hsl(120,80%,50%)"/>
                      <stop offset="49.999%" stopColor="hsl(120,80%,50%)"/>
                      <stop offset="49.999%" stopColor="hsl(180,80%,50%)"/>
                      <stop offset="66.666%" stopColor="hsl(180,80%,50%)"/>
                      <stop offset="66.666%" stopColor="hsl(240,80%,50%)"/>
                      <stop offset="83.333%" stopColor="hsl(240,80%,50%)"/>
                      <stop offset="83.333%" stopColor="hsl(300,80%,50%)"/>
                    </linearGradient>
                  </defs>
                  <rect fill="url(#rainbowSegmentGradient)" width="100%" height="100"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <linearGradient id="rainbowGradient">
                      <stop offset="16.666%" stopColor="hsl(0,80%,50%)"/>
                      <stop offset="33.333%" stopColor="hsl(60,80%,50%)"/>
                      <stop offset="49.999%" stopColor="hsl(120,80%,50%)"/>
                      <stop offset="66.666%" stopColor="hsl(180,80%,50%)"/>
                      <stop offset="83.333%" stopColor="hsl(240,80%,50%)"/>
                      <stop offset="100%" stopColor="hsl(300,80%,50%)"/>
                    </linearGradient>
                  </defs>
                  <rect fill="url(#rainbowGradient)" width="100%" height="100"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <linearGradient id="repeatingGradient" spreadMethod="repeat" x2="20%">
                    <stop stopColor="#00f" offset="0"/>
                    <stop stopColor="#0f0" offset="50%"/>
                    <stop stopColor="#f00" offset="100%"/>
                  </linearGradient>
                  <rect width="100%" height="100%" fill="url(#repeatingGradient)" />
                </svg>
              </div>
            </div>
          </section>
          <section>
            <h2>Radial Gradients</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <radialGradient id="twoStopRadialGradient">
                      <stop offset="0" stopColor="#eee"/>
                      <stop offset="1" stopColor="#222"/>
                    </radialGradient>
                  </defs>
                  <rect height="100%" width="100%" fill="url(#twoStopRadialGradient)" />
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <radialGradient id="twoStopReflectRadialGradient" spreadMethod="reflect">
                      <stop offset="0" stopColor="#eee"/>
                      <stop offset="1" stopColor="#222"/>
                    </radialGradient>
                  </defs>
                  <rect height="100%" width="100%" fill="url(#twoStopReflectRadialGradient)" />
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <radialGradient id="tunnel" spreadMethod="reflect" gradientUnits="userSpaceOnUse" cx="33.333%" cy="66.666%" r="16px">
                      <stop offset="0.333" stopColor="#eee"/>
                      <stop offset="0.825" stopColor="#555"/>
                      <stop offset="1" stopColor="#222"/>
                    </radialGradient>
                  </defs>
                  <rect height="100%" width="100%" fill="url(#tunnel)" />
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <radialGradient id="center" spreadMethod="repeat" r="40%"
                    gradientTransform="translate(-0.3,0) skewX(30)" fx="75%">
                      <stop offset="0" stopColor="#222"/>
                      <stop offset="0.5" stopColor="#f00"/>
                      <stop offset="0.7" stopColor="#00f"/>
                      <stop offset="1" stopColor="#222"/>
                    </radialGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#center)" />
                </svg>
              </div>
            </div>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default GradientsPage;

GradientsPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};
