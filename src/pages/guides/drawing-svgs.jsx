import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'src/components/Layout';
import Hero from 'src/components/Hero';
import Next from 'src/components/Next';
import { formatDate } from 'src/shared/functions/formatDate';

const asOf = () => formatDate(new Date());

export async function getStaticProps() {
  return {
    props: {
      lastUpdated: asOf(),
    },
  };
}

const DrawingPage = ({lastUpdated}) => {
  const title = 'Drawing SVGs: SVG ZOO';
  const description = 'Learn about the basic coordinate system and elements to draw your SVGs.';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout lastUpdated={lastUpdated}>
        <article>
          <Hero title="Drawing SVGs" image="/assets/images/drawing_lion.svg" description={description} />
          <p>Once you have a firm grasp of <Link href="/guides/understanding-svgs/">Understanding SVGs</Link>...</p>
          <section id="toc">
            <h2>Table of Contents</h2>
            <ul>
              <li>
                <details>
                  <summary>The SVG Drawing Space</summary>
                  <ul>
                    <li>The &lt;svg&gt; element</li>
                    <li>SVG Namespace</li>
                    <li>Coordinate System</li>
                    <li>The <code>viewBox</code></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Drawing Elements</summary>
                  <ul>
                    <li>&lt;line&gt;</li>
                    <li>&lt;circle&gt;</li>
                    <li>&lt;ellipse&gt;</li>
                    <li>&lt;rect&gt;</li>
                    <li>&lt;polygon&gt;</li>
                    <li>&lt;path&gt;
                      <ul>
                        <li>arc</li>
                        <li>beziér</li>
                      </ul>
                    </li>
                    <li><code>transform</code> Attribute</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Object Elements</summary>
                  <ul>
                    <li>&lt;text&gt;</li>
                    <li>&lt;image&gt;</li>
                    <li>&lt;symbol&gt;</li>
                    <li>&lt;use&gt;</li>
                    <li>&lt;foreignObject&gt;</li>
                  </ul>
                </details>
              </li>
            </ul>
          </section>

          <section id="drawing_space">
            <h2>The SVG Drawing Space</h2>
            <section>
              <h3>The &lt;svg&gt; element</h3>
              <p>Different ways to describe the drawing area.</p>

              <p>Using height and width.</p>
              <pre><code>{`<svg width="100" height="100">\n</svg>`}</code></pre>
              <figure>
                <svg width="100" height="100"></svg>
              </figure>

              <p>using viewBox</p>
              <pre><code>{`<svg viewBox="0,0 100,100">\n</svg>`}</code></pre>
              <figure>
                <svg viewBox="0,0 100,100"></svg>
              </figure>
              <ul>
                <li>Within the SVG it&rsquo;s more accurate to describe <strong>units</strong> instead of pixels. Each of the three following SVGs all have the same stroke width (2).</li>
              </ul>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50"></rect>
                </svg>
                <svg width="400" height="400" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50"></rect>
                </svg>
                <svg width="600" height="600" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50"></rect>
                </svg>
              </figure>
            </section>

            <section id="namespace">
              <h3>The SVG Namespace</h3>
              <p>All SVG image documents are required to have the SVG namespace in the &lt;svg&gt; element.</p>
              <pre><code>{`xmlns="http://www.w3.org/2000/svg"`}</code></pre>
            </section>

            <section id="coordinate_system">
              <h3>Coordinate System</h3>
              <p>Simple cartesian coordinates.</p>
              <figure>
                <img src="/assets/images/guides/cartesian.svg" alt="Cartesian Coordinates" />
              </figure>
              <aside>
                <p>Khan Academy</p>
                <ul>
                  <li><a href="https://www.khanacademy.org/math/algebra/introduction-to-algebra/overview_hist_alg/v/descartes-and-cartesian-coordinates">Coordinate Plane Introduction</a></li>
                  <li><a href="https://www.khanacademy.org/math/basic-geo">Basic Geometry</a></li>
                </ul>
              </aside>
            </section>

            <section id="viewbox">
              <h3>The <code>viewBox</code></h3>
              <p>The viewBox is the visible area of the artwork in the SVG that will be displayed. Elements that exist outside of the viewBox will not be seen.</p>
              <pre><code>{`<svg viewBox="0 0 10 6">`}</code></pre>
              <pre><code>{`<svg viewBox="0,0 10,6">`}</code></pre>
              <figure>
                <img src="/assets/images/guides/viewBox.svg" alt="" />
                <figcaption>A viewBox set to origin <code>0,0</code> with a width of <code>10</code> and a height of <code>6</code>.</figcaption>
              </figure>
              
              <p>You can think of the viewBox as an analog to the <em>artboard</em> that can be found in Adobe Illustrator or other vector-based drawing applications. When Illustrator exports SVG files the artboard defines the viewBox. </p>

              <figure>
                <img src="/assets/images/guides/artboard.webp" alt="" />
                <figcaption>The Artboard in Adobe Illustrator</figcaption>
              </figure>

              <aside>
                <p>Check out the <Link href="/tools/viewbox-visualizer">Viewbox Visualizer</Link> for an interactive example of the <code>viewBox</code> functionality.</p>
              </aside>

              {/* <h4>viewBox (cropped)</h4>
              <p>Use the character reference, not the html entity.</p>
              <pre><code>{`<svg viewBox="0 0 900 100">`}</code></pre>
              <figure>
                <svg viewBox="0 0 900 100">
                  <circle cx="50" cy="50" r="25" />
                  <rect x="100" y="25" width="50" height="50" />
                  <rect x="175" y="25" width="100" height="50" />
                  <polygon points="360,20 400,80 320,80"/>
                  <polygon points="445,15 475,30 475,60 445,75 415,60 415,30"/>
                  <text x="500" y="75">I &#10084; SVG!</text>
                  <image href="/assets/images/guides/lion_cracker.webp" x="750" y="5" height="100" width="100" />
                </svg>
              </figure>
              <p>Using the SVG above, we can change the viewBox so that only portions of the SVG are displayed.</p>
              <pre><code>{`<svg width="100" height="100" viewBox="0 0 100 100">`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="25" />
                  <rect x="100" y="25" width="50" height="50" />
                  <rect x="175" y="25" width="100" height="50" />
                  <polygon points="360,20 400,80 320,80"/>
                  <polygon points="445,15 475,30 475,60 445,75 415,60 415,30"/>
                  <text x="500" y="75">I &#10084; SVG!</text>
                  <image href="/assets/images/guides/lion_cracker.webp" x="750" y="5" height="100" width="100" />
                </svg>
              </figure>

              <pre><code>{`<svg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;100 0 100 100&quot;>`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="100 0 100 100">
                  <circle cx="50" cy="50" r="25" />
                  <rect x="100" y="25" width="50" height="50" />
                  <rect x="175" y="25" width="100" height="50" />
                  <polygon points="360,20 400,80 320,80"/>
                  <polygon points="445,15 475,30 475,60 445,75 415,60 415,30"/>
                  <text x="500" y="75">I &#10084; SVG!</text>
                  <image href="/assets/images/guides/lion_cracker.webp" x="750" y="5" height="100" width="100" />
                </svg>
              </figure>

              <pre><code>{`<svg width="100" height="100" viewBox="500 0 100 100">`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="515 0 90 100">
                  <circle cx="50" cy="50" r="25" />
                  <rect x="100" y="25" width="50" height="50" />
                  <rect x="175" y="25" width="100" height="50" />
                  <polygon points="360,20 400,80 320,80"/>
                  <polygon points="445,15 475,30 475,60 445,75 415,60 415,30"/>
                  <text x="500" y="75">I &#10084; SVG!</text>
                  <image href="/assets/images/guides/lion_cracker.webp" x="750" y="5" height="100" width="100" />
                </svg>
              </figure> */}
            </section>
          </section>
          
          <section id="drawing_elements">
            <h2>Drawing Elements</h2>
            <p>Drawing elements can describe straight and curved paths or entire shape primitives.</p>

            <section id="line">
              <h3>The &lt;line&gt; element</h3>
              <pre><code>{`<line x1="10" y1="20" x2="70" y2="40" />`}</code></pre>
              
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100" >
                  <line x1="10" y1="20" x2="70" y2="40" />
                </svg>
              </figure>
              <pre><code>{`<line x1="25" y1="25" x2="75" y2="75" />\n<line x1="25" y1="75" x2="75" y2="25" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100" >
                  <line x1="25" y1="25" x2="75" y2="75" />
                  <line x1="25" y1="75" x2="75" y2="25" />
                </svg>
              </figure>
            </section>

            <section id="circle">
              <h3>The &lt;circle&gt; element</h3>
              <pre><code>{`<circle cx="50" cy="50" r="25" />`}</code></pre>
              
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="25" />
                </svg>
              </figure>
            </section>

            <section id="ellipse">
              <h3>The &lt;ellipse&gt; element</h3>
              <pre><code>{`<ellipse cx="50" cy="50" rx="45" ry="25" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="50" rx="45" ry="25" />
                </svg>
              </figure>
            </section>

            <section id="rect">
              <h3>The &lt;rect&gt; element</h3>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" />
                </svg>
              </figure>

              <h4>rounded rect</h4>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" rx="8" ry="8" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" rx="8" ry="8" />
                </svg>
              </figure>
            </section>

            <section id="polygon">
              <h3>The &lt;polygon&gt; element</h3>
              
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <polygon points="50,33 75,75 25,75" />
                </svg>
                <figcaption><code>{`<polygon points="50,33 75,75 25,75" />`}</code></figcaption>
              </figure>
            </section>

            <section id="path">
              <h3>The &lt;path&gt; element</h3>
              <p>The &lt;path&gt; element has the capacity to be the most confusing, and yet the most flexible, SVG element that can be used to draw paths.</p>
              <figure>
                <code>{`<path d="M50 95c26 0 21-48 47-48 0-11-19-21-32-4 0-18-1-26-15-38-14 12-15 20-15 38-13-17-32-7-32 4 26 0 21 48 47 48z" />`}</code>
              </figure>
              <p>You&rsquo;ll discover that once you begin to understand the path commands the element won&rsquo;t seem nearly as frightening.</p>
              <table>
                <caption>Path Commands</caption>
                <thead>
                  <tr>
                    <th scope="col">Absolute</th><th scope="col">Relative</th><th scope="col">Name</th><th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>M</td><td>m</td><td><b>M</b>oveTo</td><td></td>
                  </tr>
                  <tr>
                    <td>L</td><td>l</td><td><b>L</b>ineTo</td><td></td>
                  </tr>
                  <tr>
                    <td>V</td><td>v</td><td><b>V</b>ertical</td><td></td>
                  </tr>
                  <tr>
                    <td>H</td><td>h</td><td><b>H</b>orizontal</td><td></td>
                  </tr>
                  <tr>
                    <td>A</td><td>a</td><td><b>A</b>rcTo</td><td></td>
                  </tr>
                  <tr>
                    <td>C</td><td>c</td><td><b>C</b>ubic B&eacute;zier</td><td></td>
                  </tr>
                  <tr>
                    <td>Q</td><td>q</td><td><b>Q</b>uadratic B&eacute;zier</td><td></td>
                  </tr>
                  <tr>
                    <td>Z</td><td>z</td><td>ClosePath</td><td></td>
                  </tr>
                </tbody>
              </table>

              <section>
                <h4>Absolute and Relative Path Commands</h4>
                <p>Any shape could be drawn using absolute or relative path commands.</p>
                <p>Absolute Commands (the commands using the uppercase letters) move in relation to the origin coordinates (<code>0,0</code>).</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M50,33 75,75 25,75Z" />
                  </svg>
                  <figcaption><code>{`<path d="M50,33 75,75 25,75Z" />`}</code></figcaption>
                </figure>

                <p>Relative commands  (the commands using the lowercase letters) move in relation to the preceding point&rsquo;s coordinates.</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="m50,33 25,42 -50,0z" />
                  </svg>
                  <figcaption><code>{`<path d="m50,33 25,42 -50,0z" />`}</code></figcaption>
                </figure>
              </section>

              <section>
                <h4>MoveTo</h4>
                <p>The MoveTo command (<code>M</code> or <code>m</code>) tells the SVG to start drawing. Paths always start with a MoveTo command starting from the SVG origin point (<code>0,0</code>).</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M25,33 77,25" />
                  </svg>
                  <figcaption><code>{`<path d="M25,33 77,25" />`}</code></figcaption>
                </figure>

                <p>If you can imagine tha path as a line being drawn by a pen, the MoveTo command is an analog to lifting up the pen, and putting it back down somewhere else on the paper.</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M25,33 77,25 M75,75 25,73" />
                  </svg>
                  <figcaption><code>{`<path d="M25,33 77,25 M75,75 25,73" />`}</code></figcaption>
                </figure>
              </section>

              <section>
                <h4>LineTo</h4>
                <p>The LineTo command (<code>L</code> or <code>l</code>) draws a straight line to that point.</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M25,75 L50,25 L75,75" />
                  </svg>
                  <figcaption><code>{`<path d="M25,75 L50,25 L75,75" />`}</code></figcaption>
                </figure>
              </section>

              <section>
                <h4>Vertical</h4>
                <p>The Vertical command (<code>V</code> or <code>v</code>) draws a vertical line to the point.</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M25,33 V77" />
                  </svg>
                  <figcaption><code>{`<path d="M25,33 V77" />`}</code></figcaption>
                </figure>
              </section>

              <section>
                <h4>Horizontal</h4>
                <p>The Horizontal command (<code>H</code> or <code>h</code>) </p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M25,33 H77" />
                  </svg>
                  <figcaption><code>{`<path d="M25,33 H77" />`}</code></figcaption>
                </figure>
              </section>

              <section>
                <h4>Close Path</h4>
                <p>The Close path command (<code>Z</code> or <code>z</code>) closes the path by drawing a line directly to the first point after the preceding MoveTo command.</p>

                <p>An open path:</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M45 15 75 30 75 60 45 75 15 60 15 30" />
                  </svg>
                  <figcaption><code>{`<path d="M45,15 75,30 75,60 45,75 15,60 15,30" />`}</code></figcaption>
                </figure>
                
                <p>Closing a path:</p>
                <figure>
                  <svg width="200" height="200" viewBox="0 0 100 100">
                    <path d="M45 15 75 30 75 60 45 75 15 60 15 30z" />
                  </svg>
                  <figcaption><code>{`<path d="M45,15 75,30 75,60 45,75 15,60 15,30z" />`}</code></figcaption>
                </figure>
              </section>
            </section>

            <section id="arc">
              <h3>path: arc</h3>
              <p>The ArcTo command lets you draw an Arc in the following formula:</p>
              <pre><code>A rx,ry x-axis-rotation large-arc-flag sweep-flag x,y</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g>
                    <path className="" d="M25,75 A10,10 0 0 0 75,25" />
                  </g>
                </svg>
                <figcaption><code dangerouslySetInnerHTML={{__html: '&lt;path d="M25,75 <strong>A10,10 0 0 0 75,25</strong>" /&gt;'}} /></figcaption>
              </figure>
            </section>
            <section>
              <h4>Arc and Sweep flags</h4>
              <p>When describing an arc path there are several directions that the path could follow, these directions are controlled with the arc flag and the sweep flag.</p>
              <style>{`
                .arcFlag {
                  stroke: rgba(255,255,255,0.1);
                  fill: none;
                }

                .arc0sweep0 {
                  animation: 8s stroked infinite;
                }

                .arc1sweep0 {
                  animation: 8s stroked infinite 2s;
                }

                .arc1sweep1 {
                  animation: 8s stroked infinite 4s;
                }

                .arc0sweep1 {
                  animation: 8s stroked infinite 6s;
                }
                
                @keyframes stroked {
                  20% {stroke: rgba(255,255,255,0.1);fill: transparent;}
                  80% {stroke: rgba(255,255,255,0.1);fill: transparent;}
                  90% {stroke: #fff;fill: rgba(255,255,255,.3);}
                  100% {stroke: rgba(255,255,255,0.1);fill: transparent;}
                }
                `}
              </style>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g>
                    <path className="arcFlag arc1sweep0" d="M33,33 A33,33 0 1 0 67,67" />
                    <path className="arcFlag arc1sweep1" d="M33,33 A33,33 0 1 1 67,67" />
                    <path className="arcFlag arc0sweep1" d="M33,33 A33,33 0 0 1 67,67" />
                    <path className="arcFlag arc0sweep0" d="M33,33 A33,33 0 0 0 67,67" />
                  </g>
                </svg>
                <figcaption>An example of the 4 directions an arc path could follow.</figcaption>
              </figure>

              <h4>No flags set</h4>
              <figure>
                <pre><code dangerouslySetInnerHTML={{__html: '&lt;path d="M33,33 A33,33 0 <strong>0 0</strong> 67,67" /&gt;'}} /></pre>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g>
                    <path className="arcFlag" d="M33,33 A33,33 0 1 0 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 0 1 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 1 1 67,67" />
                    <path d="M33,33 A33,33 0 0 0 67,67" />
                  </g>
                </svg>
              </figure>

              <h4>large-arc-flag</h4>
              <figure>
                <pre><code dangerouslySetInnerHTML={{__html: '&lt;path d="M33,33 A33,33 0 <strong>1</strong> 0 67,67" /&gt;'}} /></pre>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g>
                    <path className="arcFlag" d="M33,33 A33,33 0 0 1 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 1 1 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 0 0 67,67" />
                    <path d="M33,33 A33,33 0 1 0 67,67" />
                  </g>
                </svg>
              </figure>

              <h4>sweep-flag</h4>
              <figure>
                <pre><code dangerouslySetInnerHTML={{__html: '&lt;path d="M33,33 A33,33 0 0 <strong>1</strong> 67,67" /&gt;'}} /></pre>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g>
                    <path className="arcFlag" d="M33,33 A33,33 0 1 0 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 1 1 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 0 0 67,67" />
                    <path d="M33,33 A33,33 0 0 1 67,67" />
                  </g>
                </svg>
              </figure>
              
              <h4>large-arc-flag + sweep-flag</h4>
              <figure>
                <pre><code dangerouslySetInnerHTML={{__html: '&lt;path d="M33,33 A33,33 0 <strong>1 1</strong> 67,67" /&gt;'}} /></pre>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g>
                    <path className="arcFlag" d="M33,33 A33,33 0 1 0 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 0 1 67,67" />
                    <path className="arcFlag" d="M33,33 A33,33 0 0 0 67,67" />
                    <path d="M33,33 A33,33 0 1 1 67,67" />
                  </g>
                </svg>
              </figure>
              
              <h4>x-axis-rotation</h4>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <path d="M45,10 A15,45 0 0 0 95,10" />
                </svg>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <path d="M45,10 A15,45 30 0 0 95,10" />
                </svg>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <path d="M45,10 A15,45 60 0 0 95,10" />
                </svg>
                <figcaption>An arc path rotated at 0&deg;, 30&deg; and 60&deg;</figcaption>
              </figure>

              {/* <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 320 320">
                  <path
                    d="M0 160
                    L5 160
                    A25,30 0 0 0 35,160
                    A35,35 0 1 0 75,160
                    A35,40 0 0 1 135,160
                    A35,45 0 1 1 215,160
                    A35,50 0 0 0 315,160
                    L320 160
                    " />
                </svg>
              </figure> */}
              {/* <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 320 320">
                  <path
                    d="M0 160
                    L5 160
                    A35,60 30 0 0 35,160
                    A35,60 30 1 0 65,160
                    A35,60 30 0 1 95,160
                    A35,60 30 1 1 125,160
                    l5,0
                    a35,60 -30 0 0 30,0
                    a35,60 -30 1 0 30,0
                    a35,60 -30 0 1 30,0
                    a35,60 -30 1 1 30,0
                    L320 160
                    " />
                </svg>
              </figure> */}
              <aside>
                <p>Visit the <Link href="/tools/arc-path-visualizer">Arc Path Visualizer</Link> to get a better understanding of how the Arc path commands work.</p>
              </aside>
            </section>

            <section id="bezier">
              <h3>path: cubic b&eacute;zier</h3>
              <p>Commands</p>
              <ul>
                <li>CurveTo (<b>C</b>ubic)</li>
                <li>Mirror Handle (Cubic <b>S</b>)</li>
              </ul>
              <pre><code>{`<path d="M3,4 C1,1 7,1 5,4" />`}</code></pre>
              <figure><img src="/assets/images/guides/bezierC.svg" /></figure>

              <pre><code>{`<path d="M10,60 C-10,90 110,90 90,60" />`}</code></pre>
              <style>{`
                .showPath .path {
                  stroke: rgba(255,255,255,0);
                  fill: rgba(255,255,255,0.0);
                  stroke-width: 1;
                }
                .showPath:hover .path {
                  stroke: rgba(255,255,255,0.3);
                  fill: rgba(255,255,255,0.1);
                }`}
              </style>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g className="showPath">
                    <path className="path" d="M10,10 -10,40 110,40 90,10" />
                    <path d="M10,10 C-10,40 110,40 90,10" />
                  </g>
                </svg>
              </figure>
              <pre><code>{`<path d="M50,90 C-15,40 10,5 50,30 C90,5 110,40 50,90z" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g className="showPath">
                    <path className="path" d="M50,90 -15,40 10,5 50,30 90,5 110,40 50,90z" />
                    <path d="M50,90 C-15,40 10,5 50,30 C90,5 110,40 50,90z" />
                  </g>
                </svg>
              </figure>
              
              {/* <!-- Quadratic --> */}
              <h3>path: quadratic b&eacute;zier </h3>
              <p>Commands</p>
              <ul>
                <li>CurveTo (<b>Q</b>uadratic)</li>
                <li>Mirror Handle (Quadratic <b>T</b>)</li>
              </ul>
              <pre><code>{`<path d="M3,4 Q4,1 5,4" />`}</code></pre>
              <figure><img src="/assets/images/guides/bezierQ.svg" /></figure>
              <pre><code>{`<path d="M5,80 Q50,5 95,80" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g className="showPath">
                    <path className="path" d="M5,80 50,5 95,80" />
                    <path d="M5,80 Q50,5 95,80" />
                  </g>
                </svg>
              </figure>

              <h4>Mirror handles</h4>
              <pre><code>{`<path d="M5,40 C20,5 32.5,5 50,40 S82.5,75 95,40" />`}</code></pre>
              <pre><code>{`<path d="M5,40 Q25,-15 50,40 T95,40" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g className="showPath">
                    <path className="path" d="M5,40 20,5 32.5,5 50,40 82.5,75 95,40" />
                    <path d="M5,40 C20,5 32.5,5 50,40 S 82.5,75 95,40" />
                  </g>
                </svg>
              </figure>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <g className="showPath">
                    <path className="path" d="M5,40 25,-15 50,40 95,40" />
                    <path d="M5,40 Q25,-15 50,40 T95,40" />
                  </g>
                </svg>
              </figure>
            </section>
            
            <section id="transforms">
              <h3>Transform</h3>
              <p>Transforms are...</p>

              <h4>Original</h4>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" />
                </svg>
              </figure>

              <h4>Translate</h4>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="translate(20,0)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="translate(20,0)" />
                </svg>
              </figure>

              <h4>Rotate</h4>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="rotate(35)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="rotate(35)" />
                </svg>
              </figure>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="rotate(35 50,50)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="rotate(45 50,50)" />
                </svg>
              </figure>

              <h4>Skew</h4>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="skewX(20)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="skewX(20)" />
                </svg>
              </figure>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="skewY(20)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="skewY(20)" />
                </svg>
              </figure>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="skewX(20) skewY(20)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="skewX(20) skewY(20)" />
                </svg>
              </figure>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="skewY(20) skewX(20)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="skewY(20) skewX(20)" />
                </svg>
              </figure>

              <h4>Scale</h4>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="scale(1.5)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="scale(1.5)" />
                </svg>
              </figure>

              <h4>Matrix</h4>
              <p>To tranform: matrix(scaleX, skewX, skewY, scaleY, translateX, translateY)</p>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="matrix(-1,-.2,.5,1,75,10)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="matrix(-1,-.2,.5,1,75,10)" />
                </svg>
              </figure>
              <p>To rotate: matrix(cos, sin, -sin, cos, translateX, translateY)</p>
              <pre><code>{`<rect x="25" y="25" width="50" height="50" transform="matrix(.707,.707,-.707,.707,50,-20)" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="matrix(.707,.707,-.707,.707,50,-20)" />
                </svg>
              </figure>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="25" y="25" width="50" height="50" transform="rotate(45 50,50)" />
                </svg>
              </figure>
            </section>
          </section>

          <section id="object_elements">
            <h2>Object Elements</h2>
            <p>A range of elements to put objects on your page.</p>

            <section id="text">
              <h3>The &lt;text&gt; element</h3>
              <p>&lt;text&gt; allows you to add text in a single line into the SVG. You can apply the same SVG styles, transformations, and filters to text as any other SVG element.</p>
              <pre><code>{`<text x="25" y="75"&gt;I Love SVG!&lt;/text>`}</code></pre>
              <figure>
                <svg width="600" height="200" viewBox="0 0 300 100">
                  <text x="10" y="60">I Love SVG!</text>
                </svg>
              </figure>

              <h4>&lt;tspan&gt;</h4>
              <p>&lt;tspan&gt; allows you to change text styles within the line of text, much like a &lt;span&gt; element in HTML.</p>
              <pre><code>{`<tspan fill="red" stroke="none"&gt;&amp;#10084;&lt;/tspan>`}</code></pre>
              <figure>
                <svg width="600" height="200" viewBox="0 0 300 100">
                  <text x="10" y="60" >I <tspan fill="red" stroke="none">&#10084;</tspan> SVG!</text>
                </svg>
              </figure>
              <p>There is no native line-wrapping in SVG text.</p>
            </section>
            
            <section id="image">
              <h3>The &lt;image&gt; element</h3>
              <pre><code>{`<image href="lion_cracker.webp" x="10" y="10" width="80" height="80" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <image href="/assets/images/guides/lion_cracker.webp" x="10" y="10" width="80" height="80" />
                </svg>
              </figure>

              <pre><code>{`<image href="data:image/png;base64,..." x="42" y="42" width="16" height="16" />`}</code></pre>
              <figure>
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAANlBMVEUAAADWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYHWwYGXPMC6AAAAEXRSTlMAWuB6SwmYZ+y6xTeIIdU9nMFxFAoAAACxSURBVDjLrZRLFoMgDEWjKCHip9n/Zqs9lABF36R34iD36DMkUMHmZA8adnEb9eBRjZGpZUp1c6ZaWPWXlYxZtIfMWVi0z/JVvN7hU0i95xN3Dg9GuL7D+gSfRn7Fi5nlync+c7RAFLM+pL74KlskVxmRmY/KcCSFYZghFkMXf6R69KIWpA1+MWjBPwycA/8L7gfuKT4XfLZ4PvCM4TnFs473Be8c3lu8++39cVab++MNX08wI5ZKhrMAAAAASUVORK5CYII=" x="25" y="25" width="50" height="50" />
                </svg>
              </figure>
            </section>

            <section id="symbol">
              <h3>The &lt;symbol&gt; element</h3>
              <pre><code>{`<symbol id="card" viewBox="0 0 100 100"&gt;
            &lt;rect x="0" y="0" width="75" height="75" /&gt;
            &lt;path d="M50 90 C -15 40, 10 5, 50 30 C 90 5, 110 40, 50 90z" fill="rgba(255,0,0,1)" /&gt;
          &lt;/symbol&gt;
          &lt;symbol id="nested" viewBox="0 0 100 100"&gt;
            &lt;circle class="go" cx="50" cy="50" r="25" /&gt;
            &lt;use href="#card" x="50" y="50" width="15" height="15" /&gt;
            &lt;text x="33" y="48" font-size="12" stroke="none" &gt;nested&lt;/text&gt;
          &lt;/symbol>`}</code></pre>
              <figure>
                <svg width="600" height="200" viewBox="0 0 300 100">
                  <defs>
                    <symbol id="card" viewBox="0 0 100 100">
                      <rect x="0" y="0" width="75" height="75" />
                      <path d="M50 90 C -15 40, 10 5, 50 30 C 90 5, 110 40, 50 90z" fill="rgba(255,0,0,1)" />
                    </symbol>
                    <symbol id="nested" viewBox="0 0 100 100">
                      <circle className="go" cx="50" cy="50" r="25" />
                      <use href="#card" x="50" y="50" width="15" height="15" />
                      <text x="33" y="48" fontSize="12" stroke="none" >nested</text>
                    </symbol>
                  </defs>
                  <use href="#card" x="25" y="25" width="15" height="15" />
                  <use href="#card" x="75" y="33" width="75" height="75" />
                  <use href="#card" x="160" y="15" width="25" height="25" fill="#9999ff" />
                  <use href="#card" x="200" y="25" width="25" height="25" fill="none" stroke="red" strokeWidth="6" />
                  <use href="#nested"  width="100" x="220" y="0" height="100" />
                </svg>
              </figure>
            </section>
            
            <section id="use">
              <h3>The &lt;use&gt; element</h3>
              <p>Once the symbol is in your document, you can reuse it anywhere else in your document with the &lt;use&gt; element.</p>
              <pre><code>{`<svg height="200" width="200"&gt;
            &lt;use href="#card" x="10%" y="10%" width="80%" height="80%" /&gt;
          &lt;/svg>`}</code></pre>
              <figure>
                <svg height="200" width="200">
                  <use href="#card" x="10%" y="10%" width="80%" height="80%" />
                </svg>
              </figure>
            </section>
            
            <section id="foreignObject">
              <h3>The &lt;foreignObject&gt; element</h3>
              <p>Use the foreignObject tag to insert HTML elements into an SVG.</p>
              <figure>
                <svg viewBox="0 0 600 400" width="600" height="400">
                    <foreignObject x="0" y="0" width="800" height="400">
                      <style>{`
                        .foreignObjectSVG {
                          overflow: auto;
                          height: 100%;
                          padding: 5%;
                          font-size: 16px;
                        }
                        .foreignObjectSVG :is(table, tr, td) { border:1px solid #fff; color: #fff; width:500px; }
                        .foreignObjectSVG table { background-color: rgba(255, 255, 255, 0.1); }
                        .foreignObjectSVG td { background-color: rgba(255, 255, 255, 0.1); }
                        .foreignObjectSVG button { font-size: 16px; display: inline-block; margin: .5rem 1rem .5rem 0; }
                      `}</style>
                      <article className="foreignObjectSVG">
                        <h1 style={{fontSize: '24px', padding: '0', margin: '0', lineHeight: '1', color: '#fff'}}>HTML→SVG</h1>
                        <p style={{color: '#fff', padding: '0', margin: '0'}}>Web Development Invoice</p>
                        <button>One</button>
                        <button>Two</button>
                        <button>Three</button>
                        <table width="100%">
                          <tbody>
                            <tr>
                              <th>item</th><th>units</th><th>price</th>
                            </tr>
                            <tr>
                              <td>HTML</td><td>5</td><td align="right">$20.00</td>
                            </tr>
                            <tr>
                              <td>CSS</td><td>40 ft<sup>2</sup></td><td align="right">$15.00</td>
                            </tr>
                            <tr>
                              <td>SVG</td><td>1</td><td align="right">$15.00</td>
                            </tr>
                            <tr>
                              <td>White space</td><td>&infin;</td><td align="right">$4000.00</td>
                            </tr>
                            <tr>
                              <td colSpan="2">Total</td><td align="right">$4050.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </article>
                    </foreignObject>
                  </svg>
                  <figcaption>A <code>foreignObject</code> containing <code>{`<h1>`}</code>, <code>{`<p>`}</code>, <code>{`<button>`}</code>, and <code>{`<table>`}</code> HTML elements.</figcaption>
              </figure>
            </section>
          </section>
          
          <Next 
            title="Painting SVGs"
            image="/assets/images/painting_toucans.svg"
            description="Learn about using fills, strokes, transparencies, gradients, and patterns."
            cta={{
              "url": "/guides/painting-svgs",
              "lead": "Find out more about ",
              "label": "Painting SVGs"
            }} />
        </article>
      </Layout>
    </>
  )
};

export default DrawingPage;

DrawingPage.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

