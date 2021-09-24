import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Directory from 'src/components/Directory';
import Shelf from 'src/components/Shelf';
import { formatDate } from 'src/shared/functions/formatDate';
import {
  guides,
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

const GuidesPage = ({lastUpdated}) => {
  const title = 'SVG Guides: SVG ZOO';
  const description = 'A series of guides exploring the features of SVG images.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="SVG Guides" image="/assets/images/guides/title.svg" description={description} />
          {
            guides.map(item => {
              return <Directory id={item.id} key={item.id} image={item.image} title={item.title} description={item.description} cta={item.cta} />
            })
          }
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default GuidesPage;

GuidesPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

