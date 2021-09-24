import { useRef, useState } from 'react';
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

console.log('Thanks for visiting!');

const DataUriPage = ({lastUpdated}) => {
  const addRef = useRef(null);
  const encodedRef = useRef(null);
  const copyRef = useRef(null);
  const [svgBg, setSvgBg] = useState('#ffffff');
  const encoding = (svg) => `background-image: url("data:image/svg+xml;charset=UTF-8,${svg
    // .replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
    .replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
    .replace(/@/g, '%40')
    .replace(/#/g, '%23') // needed for ie and firefox?
    // .replace(/%/g, '%25') // needed?
    // .replace(/</g, '%3c')
    // .replace(/>/g, '%3e')
    // .replace(/{/g, '%7b')
    // .replace(/}/g, '%7d')
    // .replace(/|/g, '%7c')
    // .replace(/^/g, '%5e')
    // .replace(/@/g, '%40')
    // .replace(/{/g, '%7b')
    // .replace(/}/g, '%7d')
    .replace(/"'/g, '%22\'')
    .replace(/'"/g, '\'%22')
    .replace(/"/g, '\'')
    .replace(/''/g, '\'')
    .replace(/\\/g, '') // remove extra slashes
    .replace(/\n/g, '') // remove newlines
    .replace(/\r/g, '') // remove returns
    .replace(/\t/g, '') // remove tabs
    .replace(/\s\s+/g, ' ') // remove multiple white characters
    .replace(/; }/g, ';}') // remove spaces in css
    .replace(/> </g, '><') // remove spaces
  }");`;

  //   // URIs as defined by RFC 3986 (see Section 2: Characters) 
  //   // may contain any of the following characters:
  //   // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=`.
  
  //   $("#convert").click(function(){
  //     var raw = $("#input").val();
  //     var encoded = raw.replace(/\s+/g, " ")
  
  //     // charset reportedly not needed ... I need to test before implementing
  //     // TODO some positionining (preserveAspectRatio)
  //   });

  const [added, setImported] = useState('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0 16,16" width="80" height="80"><path fill="#000" d="m0,0h8v16h8v-8h-16z" /></svg>');
  const [encoded, setEncoded] = useState(encoding(added));
  const title = 'SVG to Data URI Converter: SVG Tools: SVG ZOO';
  const description = 'Convert valid SVGs to Data URIs.'

  const changeColor = ( event ) => {
    setSvgBg(event.target.value);
  }

  const handleAddSVG = () => {
    setImported(addRef.current.value);
    setEncoded(encoding(addRef.current.value));
  }

  const handleExample = (svg) => {
    let image = '';
    switch (svg) {
      case 'Spotted':
        image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0 16,16" width="180" height="180" fill="#dddddd44"><circle cx="8" cy="8" r="4"/><circle cx="0" cy="0" r="4"/><circle cx="0" cy="16" r="4"/><circle cx="16" cy="0" r="4"/><circle cx="16" cy="16" r="4"/></svg>';
        break;
      case 'Striped':
        image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0 10,10" width="50" height="50" fill="none" stroke-linecap="square" style="background-color: #000">\r\n<style type="text/css">\r\n  #c {animation: f 7s alternate infinite;}\r\n  @keyframes f { from { stroke: hsl(30deg, 90%, 50%); transform: translate(0); } to { stroke: hsl(30deg, 90%, 100%); transform: translate(-10px); } }\r\n</style>\r\n<path id="c" d="m0,3 5,4 5,-4 5,4 5,-4" stroke="hsl(30deg, 90%, 50%)" stroke-width="4" /></svg>';
        break;
      case 'Checkered':
        image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0 16,16" width="80" height="80"><path fill="#000" d="m0,0h8v16h8v-8h-16z" /></svg>';
        break;
      default:
        image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0 16,16" width="80" height="80"><path fill="#000" d="m0,0h8v16h8v-8h-16z" /></svg>';
    }
    setImported(image);
    setEncoded(encoding(image));
  }

  const handleCopy = () => {
    encodedRef.current.select()
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Successful' : 'Unsuccessful';
      console.log('Copy ' + msg);
    } catch (err) {
      console.log('Copy Failed');
    }
  }

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
            <h1>SVG to Data URI Converter</h1>
          </header>
          <div style={{margin: '0 calc(50% - 50vw)', padding: '1rem 1rem 3rem'}}>
            <fieldset>
              <legend>{description}</legend>
              <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <div className="add">
                  <label htmlFor="copySVG">Paste valid SVG code:</label>
                  <textarea id="copySVG" ref={addRef} onChange={handleAddSVG} value={added} placeholder="<svg ..." spellCheck="false"></textarea>
                  {/* <button type="button" id="convert">Convert</button> */}
                </div>
                <div className="export">
                  <label htmlFor="encodeURI">Generated Data URI:</label>
                  <textarea id="encodeURI" value={encoded} readOnly placeholder="" ref={encodedRef} spellCheck="false"></textarea>
                </div>
              </div>

              <style>
                {`.display {
                  ${encoded}
                }`}
              </style>
              <div className="display" style={{backgroundColor: svgBg, height: '20rem', marginBottom: '1rem', textAlign: 'right'}}>
                <button type="button" id="copy" ref={copyRef} onClick={handleCopy}>Copy</button>
              </div>
              <label htmlFor="background-color">Change Display Background Color: <input type="color" id="background-color" onChange={changeColor} value={svgBg} /></label>
              
            </fieldset>
            <div>
              Examples:
              <button id="spotted" onClick={() => handleExample('Spotted')}>Spotted</button>
              <button id="striped" onClick={() => handleExample('Striped')}>Striped</button>
              <button id="checkered" onClick={() => handleExample('Checkered')}>Checkered</button>
            </div>
          </div>
          <section>
            <h2>Resources</h2>
            <ul>
              <li><a href="/guides/understanding-svgs#data_uri">Understanding SVGs: CSS Background with data URI</a></li>
            </ul>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default DataUriPage;

DataUriPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

