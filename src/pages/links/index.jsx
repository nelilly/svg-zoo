import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
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

const LinksPage = ({lastUpdated}) => {
  const title = 'SVG Links: SVG ZOO';
  const description = 'Additional SVG resources.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <header>
            <h1>Links</h1>
            <p>{description}</p>
          </header>
          <section>
            <h3>Tools &amp; Applications</h3>
            <ul>
              <li><a href="https://jakearchibald.github.io/svgomg/">SVG OMG!</a> An SVG Optimization GUI.</li>
            </ul>

            <h3>Websites</h3>
            <ul>
              <li><a href="https://www.w3.org/TR/SVG/">Scalable Vector Graphics (SVG) 2 Specification</a> The W3C SVG Specification.</li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG: Scalable Vector Graphics</a> MDN Web Docs for SVG tutorials, documentation, and tools.</li>
              <li><a href="http://caniuse.com/#search=svg">Can I Use? SVGs</a> Browser support tables for SVG features on desktop and mobile web browsers.</li>
            </ul>

            <h3>Books</h3>
            <ul>
              <li><a href="https://www.amazon.com/SVG-Essentials-Producing-Scalable-Graphics/dp/1449374352/?tag=svgzoo-20"><strong>SVG Essentials: Producing Scalable Vector Graphics with XML</strong> by J. David Eisenberg and Amelia Bellamy-Royds (2014)</a></li>
              <li><a href="https://www.amazon.com/Using-SVG-CSS3-HTML5-Graphics/dp/1491921978/?tag=svgzoo-20"><strong>Using SVG with CSS3 and HTML5: Vector Graphics for Web Design</strong> by Amelia Bellamy-Royds and Kurt Cagle (2017)</a></li>
              <li><a href="https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702/?tag=svgzoo-20"><strong>SVG Animations: From Common UX Implementations to Complex Responsive Animation</strong> by Sarah Drasner (2017)</a></li>
              <li><a href="https://www.amazon.com/SVG-Text-Layout-Words-Art-ebook/dp/B0170QTV06/?tag=svgzoo-20"><strong>SVG Text Layout: Words as Art</strong> by Amelia Bellamy-Royds and Kurt Cagle (2015)</a></li>
              <li><a href="https://www.amazon.com/Practical-SVG-Chris-Coyier/dp/193755743X/?tag=svgzoo-20"><strong>Practical SVG</strong> by Chris Coyier (2016)</a></li>
            </ul>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default LinksPage;

LinksPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

