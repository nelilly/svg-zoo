import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
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

const ArcPathVisualizerPage = ({lastUpdated}) => {
  const [viewBox, setViewBox] = useState('0,0 100,100');
  const [originX, setOriginX] = useState(0);
  const [originY, setOriginY] = useState(0);

  const [viewboxWidth, setViewboxWidth] = useState(100);
  const [viewboxHeight, setViewboxHeight] = useState(100);
  const [svgWidth, setSvgWidth] = useState(200);
  const [svgHeight, setSvgHeight] = useState(200);
  const [meetOrSlice, setSlice] = useState('');
  const [ratio, setRatio] = useState('');
  
  const [absolutePath, setAbsolutePath] = useState(false);
  const [arcOriginX, setPathOriginX] = useState(33);
  const [arcOriginY, setPathOriginY] = useState(33);
  const [arcRadiusX, setArcRadiusX] = useState(33);
  const [arcRadiusY, setArcRadiusY] = useState(33);
  const [rotation, setRotation] = useState(0);
  const [arcFlag, setArcFlag] = useState(0);
  const [sweepFlag, setSweepFlag] = useState(0);
  const [arcEndX, setArcEndX] = useState(33);
  const [arcEndY, setArcEndY] = useState(33);

  const [displayPath, setDisplayPath] = useState(`<path d="m${arcOriginX},${arcOriginY} ${absolutePath ? 'A' : 'a'}${arcRadiusX},${arcRadiusY} ${rotation} ${arcFlag} ${sweepFlag} ${arcEndX},${arcEndY}" />`);
  

  useEffect(() => {
    setDisplayPath(`<path d="m${arcOriginX},${arcOriginY} ${absolutePath ? 'A' : 'a'}${arcRadiusX},${arcRadiusY} ${rotation} ${arcFlag} ${sweepFlag} ${arcEndX},${arcEndY}" />`);
  },[arcOriginX,arcOriginY,absolutePath,arcRadiusX,arcRadiusY,rotation,arcFlag,sweepFlag,arcEndX,arcEndY]);

  useEffect(() => {
    setViewBox(`${originX},${originY} ${viewboxWidth},${viewboxHeight}`);
  },[originX,originY,viewboxWidth,viewboxHeight]);

  const handleExample = (svg) => {
    switch (svg) {
      case 'NearCircle':
        setAbsolutePath(false);
        setPathOriginX(20);
        setPathOriginY(50);
        setArcRadiusX(30);
        setArcRadiusY(30);
        setRotation(0);
        setArcFlag(1);
        setSweepFlag(1);
        setArcEndX(0);
        setArcEndY(1);
        break;
      case 'HalfCircle':
        setAbsolutePath(false);
        setPathOriginX(20);
        setPathOriginY(50);
        setArcRadiusX(30);
        setArcRadiusY(30);
        setRotation(0);
        setArcFlag(0);
        setSweepFlag(0);
        setArcEndX(60);
        setArcEndY(0);
        break;
      case 'OffCenter':
        setAbsolutePath(false);
        setPathOriginX(3);
        setPathOriginY(45);
        setArcRadiusX(12);
        setArcRadiusY(12);
        setRotation(0);
        setArcFlag(0);
        setSweepFlag(0);
        setArcEndX(24);
        setArcEndY(0);
        break;
      case 'Oval':
        setAbsolutePath(false);
        setPathOriginX(7);
        setPathOriginY(63);
        setArcRadiusX(35);
        setArcRadiusY(49);
        setRotation(30);
        setArcFlag(1);
        setSweepFlag(1);
        setArcEndX(0);
        setArcEndY(1);
        break;
      default:
        setDisplayPath('<path d="m20,50a30,30 0 0 0 60,0a30,30 0 0 0 -60,0" />');
    }
  }

  const handleOriginX = (event) => {
    setOriginX(event.target.value);
  }

  const handleOriginY = (event) => {
    setOriginY(event.target.value);
  }

  const handleViewboxWidth = (event) => {
    setViewboxWidth(event.target.value);
  }

  const handleViewboxHeight = (event) => {
    setViewboxHeight(event.target.value);
  }

  const handleSvgWidth = (event) => {
    setSvgWidth(event.target.value);
  }

  const handleSvgHeight = (event) => {
    setSvgHeight(event.target.value);
  }

  const handleRatio = (event) => {
    setRatio(event.target.value);
  }

  const handleMeetOrSlice = (event) => {
    setSlice(event.target.checked ? 'slice': '');
  }

  const handleAbsolutePath = () => {
    setAbsolutePath(!absolutePath);
  }

  const handlePathOriginX = (event) => {
    setPathOriginX(event.target.value);
  }

  const handlePathOriginY = (event) => {
    setPathOriginY(event.target.value);
  }

  const handleArcRadiusX = (event) => {
    setArcRadiusX(event.target.value);
  }

  const handleArcRadiusY = (event) => {
    setArcRadiusY(event.target.value);
  }

  const handleRotation = (event) => {
    setRotation(event.target.value);
  }

  const handleArcFlag = () => {
    setArcFlag(arcFlag === 0 ? 1 : 0);
  }

  const handleSweepFlag = () => {
    setSweepFlag(sweepFlag === 0 ? 1 : 0);
  }

  const handleArcEndX = (event) => {
    setArcEndX(event.target.value);
  }

  const handleArcEndY = (event) => {
    setArcEndY(event.target.value);
  }

  const returnRatio = (ratio, meetOrSlice) => {
    const ratioString = `${ratio} ${meetOrSlice}`.trim();
    if(ratioString === ' ') { return ''; }
    return ratioString;
  }
  // const dimensions = (height, width) => width && height && `height="${height}" width="${width}"`

  const title = 'Arc Path Visualizer: SVG Tools: SVG ZOO';
  const description = 'Understand Arc Path Commands.';

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
            <h1>Arc Path Visualizer</h1>
          </header>
          <div style={{margin: '0 calc(50% - 50vw)', padding: '1rem 1rem 3rem'}}>
            <fieldset>
              <legend>{description}</legend>
              <details>
                <summary>Edit <code>svg</code> Node</summary>
                <code>&lt;svg {viewboxHeight && viewboxWidth && `viewBox="${viewBox}"`} {svgWidth && `width="${svgWidth}"`} {svgHeight && `height="${svgHeight}"`} {ratio && `preserveAspectRatio="${returnRatio(ratio,meetOrSlice)}"`}&gt;</code>
                <div className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
                  <div>
                    <label htmlFor="origin-x">Origin X</label>
                    <input type="number" id="origin-x" value={originX} onChange={handleOriginX} onKeyUp={handleOriginX} />
                    <label htmlFor="origin-y">Origin Y</label>
                    <input type="number" id="origin-y" value={originY} onChange={handleOriginY} onKeyUp={handleOriginY} />
                  </div>
                  <div>
                    <label htmlFor="view-width">Viewbox Width</label>
                    <input type="number" id="view-width" value={viewboxWidth} onChange={handleViewboxWidth} onKeyUp={handleViewboxWidth} min="1" />
                    <label htmlFor="view-height">Viewbox Height</label>
                    <input type="number" id="view-height" value={viewboxHeight} onChange={handleViewboxHeight} onKeyUp={handleViewboxHeight} min="1" />
                  </div>
                  <div>
                    <label htmlFor="svg-width">SVG Width</label>
                    <input type="number" id="svg-width" value={svgWidth} onChange={handleSvgWidth} onKeyUp={handleSvgWidth} min="1" max="1200" />
                    <label htmlFor="svg-height">SVG Height</label>
                    <input type="number" id="svg-height" value={svgHeight} onChange={handleSvgHeight} onKeyUp={handleSvgHeight} min="1" max="1200" />
                  </div>
                  <div>
                    <fieldset>
                      <legend>Preserve Aspect Ratio</legend>
                      <label>align</label>
                      <select onChange={handleRatio}>
                        <option value=""></option>
                        <option value="none">none (stretches to fit)</option>
                        <option value="xMinYMin">xMinYMin</option>
                        <option value="xMinYMid">xMinYMid</option>
                        <option value="xMinYMax">xMinYMax</option>
                        <option value="xMidYMin">xMidYMin</option>
                        <option value="xMidYMid">xMidYMid (default)</option>
                        <option value="xMidYMax">xMidYMax</option>
                        <option value="xMaxYMin">xMaxYMin</option>
                        <option value="xMaxYMid">xMaxYMid</option>
                        <option value="xMaxYMax">xMaxYMax</option>
                      </select>
                      <label htmlFor="meetOrSlice">
                        <input id="meetOrSlice" type="checkbox" onClick={handleMeetOrSlice} disabled={!ratio} /> Slice
                      </label>
                    </fieldset>
                  </div>
                </div>
              </details>
              <div className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
                <div>
                  <label htmlFor="absolutePath">
                    <input id="absolutePath" type="checkbox" onClick={handleAbsolutePath} /> {`Path is ${absolutePath ? 'Absolute' : 'Relative'}`}
                  </label>
                  <label htmlFor="arc-origin-x">Path Origin X</label>
                  <input type="number" id="arc-origin-x" value={arcOriginX} onChange={(event) => handlePathOriginX(event)} onKeyUp={handlePathOriginX} />
                  <label htmlFor="arc-origin-y">Path Origin Y</label>
                  <input type="number" id="arc-origin-y" value={arcOriginY} onChange={(event) => handlePathOriginY(event)} onKeyUp={handlePathOriginY} />
                </div>
                <div>
                  <label htmlFor="arc-start-x">Arc Radius X</label>
                  <input type="number" id="arc-start-x" value={arcRadiusX} onChange={(event) => handleArcRadiusX(event)} onKeyUp={handleArcRadiusX} />
                  <label htmlFor="arc-start-y">Arc Radius Y</label>
                  <input type="number" id="arc-start-y" value={arcRadiusY} onChange={(event) => handleArcRadiusY(event)} onKeyUp={handleArcRadiusY} />
                </div>
                <div>
                  <label htmlFor="rotation">Rotation</label>
                  <input type="range" id="rotation" name="rotation" value={rotation} onChange={(event) => handleRotation(event)} min="-360" max="360" style={{border: '.1rem', verticalAlign: 'middle', maxWidth: '200px', outline: 'none'}} /> {rotation}&deg;
                  <label htmlFor="arc-flag">
                    <input id="arc-flag" type="checkbox" onClick={handleArcFlag} /> Arc Flag
                  </label>
                  <label htmlFor="sweep-flag">
                    <input id="sweep-flag" type="checkbox" onClick={handleSweepFlag} /> Sweep Flag
                  </label>
                </div>
                <div>
                  <label htmlFor="arc-end-x">Arc End X</label>
                  <input type="number" id="arc-end-x" value={arcEndX} onChange={handleArcEndX} onKeyUp={handleArcEndX} />
                  <label htmlFor="arc-end-y">Arc End Y</label>
                  <input type="number" id="arc-end-y" value={arcEndY} onChange={handleArcEndY} onKeyUp={handleArcEndY} />
                </div>
              </div>
              <figure>
                <figcaption><code>{displayPath}</code></figcaption>
                <svg
                  viewBox={viewBox}
                  height={svgHeight}
                  width={svgWidth}
                  preserveAspectRatio={returnRatio(ratio,meetOrSlice)}
                  dangerouslySetInnerHTML={{ __html: displayPath }}
                >
                </svg>
              </figure>
            </fieldset>
          </div>

          <div>
            Examples:
            <button onClick={() => handleExample('NearCircle')}>359&deg; Circle</button>
            <button onClick={() => handleExample('HalfCircle')}>Half Circle</button>
            <button onClick={() => handleExample('OffCenter')}>Off Center</button>
            <button onClick={() => handleExample('Oval')}>Oval</button>
          </div>
          <section>
            <h2>Resources</h2>
            <ul>
              <li><Link href={`${process.env.pathPrefix}/guides/drawing-svgs#arc`}>Drawing SVGs: path: arc</Link></li>
              <li><Link href={`${process.env.pathPrefix}/guides/drawing-svgs#viewbox`}>Drawing SVGs: The viewBox</Link></li>
            </ul>
          </section>
        </article>
        <Shelf color="#fff" canvas="#0D4863" title="SVG Library" books={books} />
      </Layout>
    </>
  )
};

export default ArcPathVisualizerPage;

ArcPathVisualizerPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

