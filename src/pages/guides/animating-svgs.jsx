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

const AnimatingPage = ({lastUpdated}) => {
  const title = 'Animating SVGs: SVG ZOO';
  const description = 'Learn how to transform, energize, and make your SVGs dance.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="Animating SVGs" image="/assets/images/animation_bee.svg" description={description} />
          <section id="toc">
            <h2>Table of Contents</h2>
            <ul>
              <li>Browser Support</li>
              <li>CSS Animation</li>
              <li>transforms</li>
              <li>SMIL</li>
            </ul>
          </section>

          <section id="css_animation">
            <h2>CSS Animation</h2>
            <p>Animation can be implemented using CSS.</p>

            <h3>Line drawing</h3>
            <figure>
              <svg viewBox="0 0 600 200" dominantBaseline="middle" textAnchor='middle'>
                <text className="draw-slow" x="300" y="100" fontSize="100" >I <tspan fill="red" stroke="none">&#10084;</tspan> SVG!</text>
              </svg>
            </figure>

            <h3>Dots Loading</h3>
            <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.87)" stroke="none">
              <style>{`
              @keyframes fadeIn {  from { fill: rgba(255, 255, 255, 0.1); } }
              .loading-dot { animation: fadeIn 0.999999s infinite alternate;}
              .loading-dot:nth-of-type(2n) {animation-delay: 0.333333s;}
              .loading-dot:nth-of-type(3n) {animation-delay: 0.666666s;}
              .loading-dot:nth-of-type(4n) {animation-delay: 0.999999s;}
              `}</style>
              <circle cx="50" cy="50" r="46" stroke="none" fill="rgba(0, 0, 0, 0.87)"/>
              <circle stroke="none" fill="#fff" className="loading-dot" cx="23" cy="50" r="8.9"/>
              <circle stroke="none" fill="#fff" className="loading-dot" cx="50" cy="50" r="8.9"/>
              <circle stroke="none" fill="#fff" className="loading-dot" cx="77.4" cy="50" r="8.9"/>
            </svg>

            <h3>Circle Loading</h3>
            <img src={`${process.env.pathPrefix}/assets/images/guides/loading-circle.svg`} height="200" width="200" />
          </section>

          <section id="smil">
            <h2>SMIL</h2>
            <p><a href="https://caniuse.com/svg-smil">Can I Use? SMIL</a></p>
          </section>

          <Next 
            title="Programming SVGs"
            image="/assets/images/program_mole.webp"
            description="Learn how to make your SVGs react, take input, and perform."
            cta={{
              "url": "/guides/programming-svgs",
              "lead": "Find out more about ",
              "label": "Programming SVGs"
            }} />
        </article>
      </Layout>
    </>
  )
};

export default AnimatingPage;

AnimatingPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

