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

const ToolsPage = ({lastUpdated}) => {
  const title = 'SVG Tools: SVG ZOO';
  const description = 'SVG tools, generators, helpers, and visualizations.'
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="SVG Tools" description={description} />
          <section>
            <ul>
              <li><Link href="/tools/arc-path-visualizer/">Arc Path Visualizer</Link></li>
              <li><Link href="/tools/viewbox-visualizer/">ViewBox Visualizer</Link></li>
              <li><Link href="/tools/svg-to-data-uri-converter/">SVG to Data URI Converter</Link></li>
            </ul>
          </section>
          <section id="to_do">
            <h2>To Do:</h2>
            <ul>
              <li>feColorMatrix Visualizer</li>
              <li>feConvolveMatrix Visualizer</li>
              <li>feTurbulence Visualizer</li>
              <li>SVG Gradients Generator</li>
              <li>SVG Duotone Generator</li>
              <li>SVG Border Image Builder</li>
            </ul>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default ToolsPage;

ToolsPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

