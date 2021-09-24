import PropTypes from 'prop-types';
import Head from 'next/head';
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

const NewsPage = ({lastUpdated}) => {
  const title = 'SVG News: SVG ZOO';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="SVG News" description="SVG news." />
          <div style={{ fontSize: '3rem', color: '#a00', backgroundColor: 'white', padding: '3rem', textAlign: 'center', margin: '0 0 2rem', borderRadius: '1rem'}}>Coming Soon!</div>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default NewsPage;

NewsPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

