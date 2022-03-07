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

const LibrariesPage = ({lastUpdated}) => {
  const title = 'SVG Libraries: SVG ZOO';
  const description = 'SVG libraries for gradients, patterns, and filters.'
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="SVG Libraries" description={description} />
          <section>
            <ul>
              <li><Link href={`${process.env.pathPrefix}/libraries/gradients/`}>Gradients</Link></li>
              <li><Link href={`${process.env.pathPrefix}/libraries/patterns/`}>Patterns</Link></li>
              <li><Link href={`${process.env.pathPrefix}/libraries/filters/`}>Filters</Link></li>
            </ul>
          </section>
          {/* <section id="to_do">
            <h2>To Do:</h2>
          </section> */}
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default LibrariesPage;

LibrariesPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

