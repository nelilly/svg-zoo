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

const HandCodedIconsPage = ({lastUpdated}) => {
  const title = 'Hand-coded Icons: SVG Tutorials: SVG ZOO';
  const description = 'Learning to code SVGs by drawing icons.'
  
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
            <h1>Hand-coded Icons</h1>
            <p>{description}</p>
          </header>

          <section>
            <h2>Path Optimization</h2>
            <p>Do your best to write your SVGs with the least amount of code possible. For example, an &ldquo;X&rdquo; symbol,</p>

            <figure>
              <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="M25,25 75,75 M75,25 25,75" />
              </svg>
            </figure>
            <p>Could be writen in the following ways:</p>
            <pre><code>{`<line x1="25" y1="25" x2="75" y2="75" />\n<line x1="25" y1="75" x2="75" y2="25" />`}</code></pre>
            <pre><code>{`<path d="M25,25 75,75" />\n<path d="M75,25 25,75" />`}</code></pre>
            <pre><code>{`<path d="M25,25 75,75 M75,25 25,75" />`}</code></pre>
            
            <p>Similarly, a rounded rectangle,</p>
            <figure>
              <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="M25,33 a8,8 0 0 1 8,-8 H67 a8,8 0 0 1 8,8 V67 a8,8 0 0 1 -8,8 H33 a8,8 0 0 1 -8,-8z" />
              </svg>
            </figure>
            <p>Could be written in a number of different ways as well:</p>
            <pre><code>{`<rect x="25" y="25" width="50" height="50" rx="8" ry="8" />`}</code></pre>
            <pre><code>{`<path d="M25,33 a8,8 0 0 1 8,-8 H67 a8,8 0 0 1 8,8 V67 a8,8 0 0 1 -8,8 H33 a8,8 0 0 1 -8,-8z" />`}</code></pre>
            <p>Even if the path version was shorter, you might opt for using the rect for legibility, or because it&rsquo;s easier to code.</p>

            <p>Taking pains to write your code as simply and short as possible will help keep your file size down.</p>
          </section>
          
          <section>
            <h2>Close Icon</h2>
            <p></p>
            <details>
              <summary>View  icon solution</summary>
              <pre><code>{``}</code></pre>
            </details>
          </section>
          <section>
            <h2>Menu Icon</h2>
            <p></p>
            <details>
              <summary>View  icon solution</summary>
              <pre><code>{``}</code></pre>
            </details>
          </section>
          <section>
            <h2>Helm Icon</h2>
            <p></p>
            <details>
              <summary>View  icon solution</summary>
              <pre><code>{``}</code></pre>
            </details>
          </section>
          <section>
            <h2>More Icon (Vertical Ellipsis)</h2>
            <p></p>
            <details>
              <summary>View  icon solution</summary>
              <pre><code>{``}</code></pre>
            </details>
          </section>
          <section>
            <h2>Notification Icon</h2>
            <p></p>
            <details>
              <summary>View  icon solution</summary>
              <pre><code>{``}</code></pre>
            </details>
          </section>
          <section>
            <h2>Arrow Icon</h2>
            <p></p>
            <details>
              <summary>View  icon solution</summary>
              <pre><code>{``}</code></pre>
            </details>
          </section>
          <section>
            <h2>Circle</h2>
            <p>The arc path formula to draw a full circle is:</p>
            <pre><code>{`M(cx - radius),cy\na(radius),(radius) 0 0 0 (radius * 2),0\na(radius),(radius) 0 0 0 -(radius * 2),0`}</code></pre>
            <p>The rotation, arc, and sweep flags must be identical for both arcs. So converting a circle at <code>cx=&quot;15&quot;</code> and <code>cy=&quot;45&quot;</code> with a 12 pixel radius would be:</p>
            <pre><code>{`M3,45\na12,12 0 0 0 24,0\na12,12 0 0 0 -24,0`}</code></pre>
            <figure>
              <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="M3,45a12,12 0 0 0 24,0a12,12 0 0 0 -24,0" />
              </svg>
              <figcaption></figcaption>
            </figure>
            <details>
              <summary>View circle icon solution</summary>
              <pre><code>{`<path d="M3,45a12,12 0 0 0 24,0a12,12 0 0 0 -24,0" />`}</code></pre>
            </details>
          </section>
          <section>
            <h2>Egg</h2>
            <figure>
              <svg viewBox="0,0 100,100" width="200" height="200" >
                <path d="m19,59 a30,34 0 0 0 66,0a10,17 0 0 0 -66,0" />
              </svg>
              <figcaption></figcaption>
            </figure>
            <details>
              <summary>View egg icon solution</summary>
              <pre><code>{`<path d="m19,59 a30,34 0 0 0 66,0a10,17 0 0 0 -66,0" />`}</code></pre>
            </details>
          </section>
          <section>
            <h2>Crescent</h2>
            <figure>
              <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="m16,13 a47,47 0 1 1 0,74a38,38 0 1 0 0,-74z" />
              </svg>
              <figcaption></figcaption>
            </figure>
            <details>
              <summary>View crescent icon solution</summary>
              <pre><code>{`<path d="m16,13 a47,47 0 1 1 0,74a38,38 0 1 0 0,-74z" />`}</code></pre>
            </details>
          </section>
          <section>
            <h2>Torus</h2>
            <figure>
              <svg width="200" height="200" viewBox="0 0 100 100" fillRule="evenodd">
                <path d="M5,50a45,45 0 0 0 90,0a45,45 0 0 0 -90,0M30,50a20,20 0 0 0 40,0a20,20 0 0 0 -40,0" />
              </svg>

              <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="M5,50a45,45 0 1 1 90,0a45,45 0 1 1 -90,0M30,50a20,20 0 0 0 40,0a20,20 0 0 0 -40,0" />
              </svg>
              <figcaption></figcaption>
            </figure>
            <details>
              <summary>View torus icon solution</summary>
              <pre><code>{`<svg width="200" height="200" viewBox="0 0 100 100" fillRule="evenodd">\n  <path d="M5,50a45,45 0 0 0 90,0a45,45 0 0 0 -90,0M30,50a20,20 0 0 0 40,0a20,20 0 0 0 -40,0" />\n</svg>`}</code></pre>
            </details>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default HandCodedIconsPage;

HandCodedIconsPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};
