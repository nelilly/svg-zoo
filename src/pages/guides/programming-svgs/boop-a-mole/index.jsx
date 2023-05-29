import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
// import Next from 'src/components/Next';
import { formatDate } from 'src/shared/functions/formatDate';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const BoopAMole = ({lastUpdated}) => {
  const title = 'Boop-A-Mole: Programming SVGs: SVG ZOO';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <object type="image/svg+xml" data={`${process.env.pathPrefix}/assets/images/program_mole.svg`}></object>
        </article>
      </Layout>
    </>
  )
};

export default BoopAMole;

BoopAMole.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

