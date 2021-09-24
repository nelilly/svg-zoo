import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
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
  const title = 'SVG ZOO Frequently Asked Questions: SVG ZOO';
  
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
            <h1>Frequently Asked Questions</h1>
          </header>
          <section>
            <details id="why" open>
              <summary>Why are you doing this?</summary>
              <div>
                <p>I legitimately enjoy hand-coding SVG images. I decided to create this SVG fansite because:</p>
                <ol>
                  <li>I wanted to create a work space where I could explore the boundaries of SVGs.</li>
                  <li>I wanted to maintain a set of tools that would help me explore, code, create, and use SVGs.</li>
                  <li>I &hearts; SVGs.</li>
                </ol>
              </div>
            </details>
            <details>
              <summary>What&rsquo;s so important about SVGs?</summary>
              <div>
                <p>Aside from the many <Link href="/guides/understanding-svgs/#benefits">benefits</Link> of SVGs...</p>
                <p>Personally, learning how to hand-code SVGs has helped me make performant, easily maintained data-visualization dashboards and website user-interfaces. I enjoy using code as a canvas.</p>
              </div>
            </details>
            <details>
              <summary>How long have you been making SVGs?</summary>
              <div>
                <p>I&rsquo;ve been working with SVGs since 2014, just as it was becoming possible to begin using them without PNG fallbacks. I was tasked with creating an SVG sprite system that we could use that was eventually adopted by all of the other front-end teams. Since then I&rsquo;ve continually looked for additional ways to stretch the boundaries of SVG use.</p>
              </div>
            </details>
            <details>
              <summary>Who are you?</summary>
              <p>I&rsquo;m Nathan E. Lilly. I&rsquo;m a life long artist and Philadelphia resident who has earned a Commercial Art diploma and B.A. in Fine Art. I used this artistic training to become a UI engineer and software developer.</p>
              <p>You can see my personal portfolio site at <a href="https://lilly.art/">lilly.art</a>.</p>
            </details>
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

