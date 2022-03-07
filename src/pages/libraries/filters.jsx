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

const FiltersPage = ({lastUpdated}) => {
  const title = 'SVG Filters: SVG Libraries: SVG ZOO';
  const description = 'SVG libraries of filters.'
  
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
            <h1>SVG Filters</h1>
            <p>{description}</p>
          </header>
          <section>
            <h2>Filters</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
              <div>
                <svg viewBox="0,0 100,100">
                  <filter id="paper" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise"/>
                    <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2" result="diffLight">
                      <feDistantLight azimuth="45" elevation="35"/>
                    </feDiffuseLighting>
                  </filter>
                  <circle cx="50" cy="50" r="50" filter="url(#paper)" />
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 360,360">
                  <defs>
                    <pattern id="skybuffalo" width="30" height="30" patternUnits="userSpaceOnUse">
                    <linearGradient id="skyGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop stopColor="#3681c8" offset="0"></stop>
                      <stop stopColor="#eeeeee" offset="1"></stop>
                    </linearGradient>
                    <filter style={{colorInterpolationFilters:'sRGB'}} id="cloudFilter" x="-0.5" y="-0.5" height="2" width="2">
                      <feTurbulence result="result2" baseFrequency="0.015151515151515152" type="fractalNoise" numOctaves="10" seed="286.95652173913044"></feTurbulence>
                      <feTurbulence type="fractalNoise" baseFrequency="0.085000000000000006" result="result4" scale="6.7000000000000002" numOctaves="10"></feTurbulence>
                      <feTurbulence scale="1.8999999999999999" numOctaves="10" type="fractalNoise" baseFrequency="0.0040000000000000001 0.0059999999999999932" result="result7"></feTurbulence>
                      <feFlood floodColor="rgb(255,255,255)" result="result1" floodOpacity="0.77000000000000002"></feFlood>
                      <feComposite in2="result2" baseFrequency="0.032000000000000001 0.044999999999999998" operator="in" numOctaves="3" result="result3"></feComposite>
                      <feDisplacementMap baseFrequency="0.20300000000000001" in2="result4" xChannelSelector="R" yChannelSelector="G" scale="1.933701657458563" result="result6"></feDisplacementMap>
                      <feComponentTransfer numOctaves="6" result="result5" in="result7" scale="20.100000000000001">
                        <feFuncR type="identity"></feFuncR>
                        <feFuncG type="identity"></feFuncG>
                        <feFuncB type="identity"></feFuncB>
                        <feFuncA type="linear" slope="3.2200000000000002" intercept="-0.81000000000000005"></feFuncA>
                      </feComponentTransfer>
                      <feComposite scale="59.799999999999997" in2="result5" in="result6" operator="in" result="result8"></feComposite>
                      <feDisplacementMap in2="result4" xChannelSelector="R" yChannelSelector="G" scale="5.524861878453039" result="result9" baseFrequency="0.039"></feDisplacementMap>
                      <feComposite in2="SourceGraphic" seed="287" result="result10"></feComposite>
                      <feComposite in2="SourceGraphic" operator="in"></feComposite>
                    </filter>
                    </pattern>
                  </defs>
                  <circle cx="180" cy="180" r="180" fill="url(#skyGradient)" filter="url(#cloudFilter)" />
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 400,400" preserveAspectRatio="xMidYMid slice">
                  <filter id="duotone">
                    <feColorMatrix type="matrix"
                      values=".33 .33 .33 0 0
                              .33 .33 .33 0 0
                              .33 .33 .33 0 0
                              0 0 0 1 0" >
                    </feColorMatrix>
                    
                    <feComponentTransfer colorInterpolationFilters="sRGB">
                      <feFuncR type="table" tableValues=".996078431  .984313725"></feFuncR>
                      <feFuncG type="table" tableValues=".125490196  .941176471"></feFuncG>
                      <feFuncB type="table" tableValues=".552941176  .478431373"></feFuncB>
                    </feComponentTransfer>
                  </filter>
                  
                  <image href={`${process.env.pathPrefix}/assets/images/vulture-600x400.jpg`} x="0" y="0" width="600" height="400" filter="url(#duotone)"></image>
                </svg>
              </div>
              <div></div>
              <div></div>
            </div>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default FiltersPage;

FiltersPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};
