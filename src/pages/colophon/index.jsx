import { useEffect, useState } from 'react';
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

const browserName = ( userAgent ) => {
  const ieAgent = userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('rv:') > -1;
  const chromeAgent = userAgent.indexOf('Chrome') > -1;
  const edgeAgent = userAgent.indexOf('Edg') > -1;
  const firefoxAgent = userAgent.indexOf('Firefox') > -1;
  const operaAgent = userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OP') > -1;
  const safariAgent = userAgent.indexOf('Safari') > -1;

  if((operaAgent)){ return 'Opera'; }
  if((edgeAgent)){ return 'Microsoft Edge'; }
  if((chromeAgent)){ return 'Chrome'; }
  if((safariAgent)){ return 'Safari'; }
  if((firefoxAgent)){ return 'Firefox'; }
  if((ieAgent)){ return 'Internet Explorer'; }
      
  return 'an unknown';
}

const os = (platform) => {
  if(platform === false || platform === null){ return 'Unknown'}
  if(platform.indexOf('Linux') > -1){ return 'Linux'}
  if(platform.indexOf('iP') > -1){ return 'iOS'}
  if(platform.indexOf('Mac') > -1){ return 'OS X'}
  if(platform.indexOf('Sun') > -1){ return 'Solaris'}
  if(platform.indexOf('Win') > -1){ return 'Windows'}

  return platform;
}

const device = ( userAgent ) => {
  if((/nintendo|playstation|psp|xbox/i.test(userAgent.toLowerCase()))){ return 'Console'}
  if((/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|xoom|sch-i800|pixel c|sm-t827r4|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(userAgent.toLowerCase()))){ return 'Tablet'}
  if((/mobile|ipad|phone|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent.toLowerCase()))){ return 'Mobile'}

  return 'Desktop';
}

const rendering = ( userAgent ) => {
  const blinkRender = (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Windows') > -1) || userAgent.indexOf('OPR') > -1;
  const edgeRender = userAgent.indexOf('Xbox') > -1;
  const geckoRender = userAgent.indexOf('Gecko') > -1;
  const prestoRender = userAgent.indexOf('Opera') > -1;
  const tridentRender = userAgent.indexOf('Trident') > -1;
  const webKitRender = userAgent.indexOf('WebKit') > -1;

  if((prestoRender)){ return 'the Presto'; }
  if((tridentRender)){ return 'the Trident'; }
  if((edgeRender)){ return 'the EdgeHTML'; }
  if((blinkRender)){ return 'the Blink'; }
  if((webKitRender)){ return 'the WebKit'; }
  if((geckoRender)){ return 'the Gecko'; }
      
  return 'an unknown';
}

const ColophonPage = ({lastUpdated}) => {
  const [browser, setBrowser] = useState({});

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    const { platform, userAgent } = navigator;
    setBrowser({
      browserFamily: browserName(userAgent),
      rendering: rendering(userAgent),
      innerHeight,
      innerWidth,
      height: window.screen.height,
      width: window.screen.width,
      os: os(platform),
      device: device(userAgent),
      userAgent,
    });
  }, []);

  const title = 'Colophon: SVG ZOO';
  const description = 'A colophon is a page at the back of a book, originating from the Greek word for “summit”. The purpose of a colophon is to give the reader information about the book’s authorship and construction methods. It is the final touch put on the work.';
  
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
            <h1>Colophon</h1>
            <p>{description}</p>
          </header>
          <section>
            <h2>The Technology Stack</h2>
            <p>The primary technology that this site showcases is Scalable Vector Graphics.</p>
            <p>This site was designed and developed using <a href="https://jamstack.org/">JAM stack principles</a>, the <a href="https://reactjs.org/">React</a> library with <a href="https://nextjs.org/">Next.js</a> and served on <a href="https://pages.github.com/">GitHub Pages</a>.</p>
            <p>It is currently displayed on {browser.os} operating system in {browser.browserFamily} browser using {browser.rendering} rendering engine with a screen size of {browser.width}×{browser.height} and document size of {browser.innerWidth}×{browser.innerHeight} (if your browser is being honest).</p>
          </section>
          <section>
            <h2>Navigation Icon</h2>
            <figure style={{textAlign: 'center', margin: '1rem 0'}}>
              <figcaption style={{textAlign: 'left'}}><p>The main navigation icon is a ship’s wheel in homage to Netscape Navigator, the inherent nautical theme of the World Wide Web, and because I hate the hamburger.</p></figcaption>
              <svg height="300" width="300" viewBox="0 0 100 100" fill="#fff6" stroke="currentColor" style={{border: 'none', backgroundColor: 'transparent'}}>
                <use href="#helm" height="100" width="100" />
              </svg>
            </figure>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default ColophonPage;

ColophonPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

