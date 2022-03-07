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

const PatternsPage = ({lastUpdated}) => {
  const title = 'SVG Patterns: SVG Libraries: SVG ZOO';
  const description = 'SVG libraries of patterns.'
  
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
            <h1>SVG Patterns</h1>
            <p>{description}</p>
          </header>
          <section>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><path d='M0,40L40,0H20L0,20M40,40V20L20,40'/></g></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><path d='M0,0L40,40H20L0,20M40,0V20L20,0'/></g></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><path d='M0,40L40,0H20L0,20M40,40V20L20,40' fill='hsla(0, 0%, 100%, .075)'/><path d='M0,0L40,40H20L0,20M40,0V20L20,0' fill='hsla(0, 0%, 100%, .075)'/></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><circle cx='20' cy='20' r='12.5' /></g></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><rect x='25%' y='25%' height='50%' width='50%' /></g></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><rect x='25%' y='25%' height='50%' width='50%' transform='rotate(45 20,20)' /></g></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><text x='50%' y='55%' textAnchor='middle' alignmentBaseline='middle' fontFamily='sans-serif' fontWeight='bold' fontSize='33'>&#9829;</text></g></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><text x='50%' y='55%' textAnchor='middle' alignmentBaseline='middle' fontFamily='sans-serif' fontWeight='bold' fontSize='33'>&#9827;</text></g></svg>

            <svg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: '#a00'}}><g fill='hsla(0, 0%, 100%, .15)'><text x='50%' y='55%' textAnchor='middle' alignmentBaseline='middle' fontFamily='sans-serif' fontWeight='bold' fontSize='33'>&#9824;</text></g></svg>
          </section>
          <section>
            <h2>Patterns</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="zebra" x="0" y="0" width="12" height="20" patternTransform="skewX(-15)" patternUnits="userSpaceOnUse">
                      <path fill="#eee" d="M0,0v20h20,v-20z"/>
                      <path d="M4,0v20h6,v-20z"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#zebra)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="ladybug" width=".250" height=".250" patternContentUnits="objectBoundingBox">
                      <path fill="#c00" d="M0,0v1h1,v-1z"/>
                      <circle cx=".125" cy=".125" r=".0666"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#ladybug)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="panda" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#222" d="M0,0v30h30,v-30z"/>
                      <path fill="#eee" d="M0,0v15h15,v-15zM15,15v30h30,v-30z"/>
                      <circle fill="#222" cx="7.5" cy="7.5" r="6"/>
                      <circle fill="#222" cx="22.5" cy="22.5" r="6"/>
                      <circle fill="#eee" cx="22.5" cy="7.5" r="6"/>
                      <circle fill="#eee" cx="7.5" cy="22.5" r="6"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#panda)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="tiger" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#f90" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#333" strokeWidth="10" strokeLinecap="square" d="M0,7l15,15l15,-15"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#tiger)"/>
                </svg>
              </div>


              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="gator" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#0f9" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#090" strokeWidth="10" strokeLinecap="square" d="M0,7q15,15 30,0"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#gator)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="giraffe" patternTransform="skewY(15)" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path fill="#c60" d="M0,0v20h20,v-20z"/>
                      <circle fill="none" stroke="#c90" strokeWidth="4" cx="10" cy="10" r="7"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#giraffe)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="redfish" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#c00" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#900" strokeWidth="7.5" strokeLinecap="square" d="M0,4q15,15 30,0"/>
                      <path fill="none" stroke="#900" strokeWidth="7.5" strokeLinecap="square" d="M15,19q15,15 30,0"/>
                      <path fill="none" stroke="#900" strokeWidth="7.5" strokeLinecap="square" d="M-15,19q15,15 30,0"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#redfish)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="bluefish" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#09f" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#009" strokeWidth="7.5" strokeLinecap="square" d="M0,4q15,15 30,0"/>
                      <path fill="none" stroke="#009" strokeWidth="7.5" strokeLinecap="square" d="M15,19q15,15 30,0"/>
                      <path fill="none" stroke="#009" strokeWidth="7.5" strokeLinecap="square" d="M-15,19q15,15 30,0"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#bluefish)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="redfish" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#c00" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#900" strokeWidth="7.5" strokeLinecap="square" d="M0,4q15,15 30,0"/>
                      <path fill="none" stroke="#900" strokeWidth="7.5" strokeLinecap="square" d="M15,19q15,15 30,0"/>
                      <path fill="none" stroke="#900" strokeWidth="7.5" strokeLinecap="square" d="M-15,19q15,15 30,0"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#redfish)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="bluefish" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#09f" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#009" strokeWidth="7.5" strokeLinecap="square" d="M0,4q15,15 30,0"/>
                      <path fill="none" stroke="#009" strokeWidth="7.5" strokeLinecap="square" d="M15,19q15,15 30,0"/>
                      <path fill="none" stroke="#009" strokeWidth="7.5" strokeLinecap="square" d="M-15,19q15,15 30,0"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#bluefish)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="goldfish" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#f90" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#fc0" strokeWidth="7.5" strokeLinecap="square" d="M0,4q15,15 30,0"/>
                      <path fill="none" stroke="#fc0" strokeWidth="7.5" strokeLinecap="square" d="M15,19q15,15 30,0"/>
                      <path fill="none" stroke="#fc0" strokeWidth="7.5" strokeLinecap="square" d="M-15,19q15,15 30,0"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#goldfish)"/>
                </svg>
              </div>
              <div>
                <svg viewBox="0,0 100,100">
                  <defs>
                    <pattern id="moonfish" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path fill="#cdc" d="M0,0v30h30,v-30z"/>
                      <path fill="none" stroke="#efe" strokeWidth="7.5" strokeLinecap="square" d="M0,4q15,15 30,0"/>
                      <path fill="none" stroke="#efe" strokeWidth="7.5" strokeLinecap="square" d="M15,19q15,15 30,0"/>
                      <path fill="none" stroke="#efe" strokeWidth="7.5" strokeLinecap="square" d="M-15,19q15,15 30,0"/>
                    </pattern>
                  </defs>
                  <circle cx="50" cy="50" r="50" fill="url(#moonfish)"/>
                </svg>
              </div>
            </div>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default PatternsPage;

PatternsPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};
