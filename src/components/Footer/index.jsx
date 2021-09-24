import PropTypes from 'prop-types';
import Link from 'next/link';
import { 
  siteFooter,
  about,
  connect,
  connectionList,
  connectionItem,
  legal,
} from './style.module.css';

const Footer = ({ lastUpdated }) => {

  return (
    <footer className={siteFooter}>
      <section className={about}>
        <h2>About</h2>
        <p>SVG ZOO was created by <a href="https://lilly.art/">N.E. Lilly</a> to explore the amazing and wonderful complexity that can be found in Scalable Vector Graphics. Last modified on {lastUpdated}.</p>
        <p>Additional technical details are provided on the <Link href="/colophon">Colophon</Link>.</p>
      </section>
      <section className={connect}>
        <h2>Connect</h2>
        <ul className={connectionList}>
          <li className={connectionItem}><a href="https://lilly.art/" target="_blank" rel="noopener noreferrer"><svg height="32" width="32" viewBox="0 0 100 100" fill="currentColor"><path d="M50 95c26 0 21-48 47-48 0-11-19-21-32-4 0-18-1-26-15-38-14 12-15 20-15 38-13-17-32-7-32 4 26 0 21 48 47 48z" /></svg></a></li>
          <li className={connectionItem}><a href="https://github.com/nelilly" target="_blank" rel="noopener noreferrer" ><svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
            <path fill="currentColor" d="M14.06 11.92c.39 0 .72.19 1 .58.28.38.43.86.43 1.42 0 .56-.14 1.04-.43 1.42-.28.38-.62.58-1 .58-.41 0-.76-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.29-.39.64-.58 1.05-.58zm5.03-5.2c1.1 1.19 1.65 2.63 1.65 4.32 0 1.1-.13 2.08-.38 2.96-.25.87-.57 1.59-.96 2.14s-.86 1.04-1.43 1.44c-.57.42-1.09.72-1.56.91-.47.19-1.01.34-1.63.45-.61.11-1.06.16-1.38.18-.31.01-.64.02-1 .02-.08 0-.35.01-.8.02-.44.02-.82.03-1.11.03-.29 0-.67-.01-1.11-.03-.45-.01-.72-.02-.8-.02-.36 0-.7 0-1-.02-.32-.02-.78-.07-1.38-.18-.62-.1-1.16-.25-1.63-.45-.47-.19-.99-.49-1.56-.91a6.3 6.3 0 01-1.43-1.44C1.2 15.59.88 14.88.62 14c-.25-.88-.38-1.86-.38-2.96 0-1.69.55-3.13 1.65-4.32-.1-.06-.11-.66 0-1.78.1-1.13.34-2.17.73-3.12 1.37.14 3.06.92 5.07 2.32.68-.18 1.62-.27 2.8-.27 1.25 0 2.18.09 2.81.27.92-.62 1.8-1.13 2.64-1.52.85-.38 1.47-.61 1.85-.67l.58-.13c.39.95.63 1.99.73 3.12.11 1.12.11 1.72-.01 1.78zm-8.54 11.43c2.46 0 4.32-.3 5.58-.89 1.26-.59 1.9-1.81 1.9-3.65 0-1.07-.4-1.96-1.2-2.67-.41-.39-.9-.62-1.45-.71-.54-.09-1.38-.09-2.51 0s-1.9.13-2.31.13c-.56 0-1.18-.03-1.94-.09s-1.36-.09-1.78-.11c-.44-.01-.9.04-1.4.16-.51.12-.92.32-1.25.62-.77.69-1.16 1.58-1.16 2.68 0 1.84.62 3.06 1.87 3.65 1.24.6 3.1.89 5.56.89h.09zm-3.56-6.23c.39 0 .72.19 1 .58.28.38.42.86.42 1.42 0 .56-.14 1.04-.42 1.42-.28.38-.62.58-1 .58-.42 0-.77-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.28-.39.63-.58 1.05-.58z"/>
          </svg><span className="vh">GitHub</span></a></li>
          <li className={connectionItem}><a href="https://codepen.io/nelilly/" target="_blank" rel="noopener noreferrer"><svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 16.7L13 24l11-7.3V9.3L13 2L2 9.3V16.7zM24 16.7L13 9.3l-11 7.4M2 9.3l11 7.3 l11-7.3M13 2v7.3M13 16.7V24"/>
          </svg><span className="vh">CodePen</span></a></li>
          <li className={connectionItem}><a href="https://linkedin.com/in/nelilly" target="_blank" rel="noopener noreferrer"><svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 19 21">
            <path fill="currentColor" d="M1.707 0a1.708 1.708 0 11-.004 3.415A1.708 1.708 0 011.707 0zM.234 14.19V4.711h2.945v9.477H.234zm4.792-9.478h2.821v1.295h.04c.393-.746 1.353-1.53 2.785-1.53 2.978 0 3.53 1.961 3.53 4.514v5.198H11.26V9.582c0-1.1-.021-2.515-1.53-2.515-1.531 0-1.764 1.198-1.764 2.433v4.69h-2.94V4.711z" transform="translate(.479 .48)"/></svg><span className="vh">LinkedIn</span></a></li>
          {/* <li className={connectionItem}><a href="https://dribbble.com/nelilly/about" target="_blank" rel="noopener noreferrer"><svg height="32" width="32" viewBox="0 0 100 100" fill="currentColor"><path d="M8.1 50.1c0-7.7 1.9-14.7 5.7-21.2 3.8-6.5 8.9-11.6 15.4-15.4 6.5-3.8 13.5-5.7 21.2-5.7 7.7 0 14.7 1.9 21.2 5.7 6.5 3.8 11.6 8.9 15.4 15.4 3.8 6.5 5.7 13.5 5.7 21.2s-2 14.7-5.7 21.2c-3.8 6.5-8.9 11.6-15.4 15.4-6.5 3.8-13.5 5.7-21.2 5.7-7.7 0-14.7-1.9-21.2-5.7-6.5-3.8-11.6-8.9-15.4-15.4-3.8-6.5-5.7-13.6-5.7-21.2zm7.1 0c0 8.8 3 16.5 8.9 23.2C26.7 68 31 63 36.9 58.2c5.9-4.8 11.6-7.8 17.1-9-.8-2-1.7-3.7-2.4-5.3-9.7 3.1-20.2 4.6-31.4 4.6-2.2 0-3.8 0-4.9-.1v.8c-.1.4-.1.6-.1.9zm1.1-8.7c1.2.1 3.1.2 5.5.2 9.4 0 18.3-1.3 26.8-3.8-4.3-7.6-9-13.9-14.1-19C30 21 26.2 24.1 23 28.1c-3.2 4-5.4 8.4-6.7 13.3zm12.5 36.5c6.4 5 13.5 7.4 21.5 7.4 4.2 0 8.3-.8 12.4-2.4-1.1-9.6-3.3-19-6.6-28-5.2 1.1-10.4 4-15.7 8.5-5.1 4.7-9 9.4-11.6 14.5zm13-61.9c5 5.1 9.5 11.5 13.8 19.2C63.2 32 69 27.9 72.9 22.9c-6.5-5.4-14-8.1-22.5-8.1-2.9 0-5.8.4-8.6 1.2zm16.8 25.2c.8 1.8 1.8 4.1 2.9 6.8 4.2-.4 8.7-.6 13.6-.6 3.5 0 7 .1 10.4.3-.5-7.7-3.3-14.5-8.3-20.4-3.7 5.4-9.9 10.1-18.6 13.9zm5 12.7c2.9 8.3 4.8 16.9 5.8 25.7 4.4-2.9 8.1-6.6 10.9-11.1 2.8-4.5 4.5-9.4 5.1-14.6-4.1-.3-7.9-.4-11.2-.4-3.2 0-6.7.2-10.6.4z"/></svg><span className="vh">Dribbble</span></a></li> */}
          {/* <li className={connectionItem}><a href="https://www.youtube.com/c/nathanelilly/videos" target="_blank" rel="noopener noreferrer"><svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M471.6 147.3a56.4 56.4 0 00-39.8-40C396.7 97.8 256 97.8 256 97.8s-140.7 0-175.8 9.5a56.6 56.6 0 00-39.8 40c-9.4 35.3-9.4 109-9.4 109s0 73.7 9.4 109a55.7 55.7 0 0039.8 39.4c35.1 9.5 175.8 9.5 175.8 9.5s140.7 0 175.8-9.5a55.7 55.7 0 0039.8-39.4c9.4-35.3 9.4-109 9.4-109s0-73.7-9.4-109zM210 323.2V189.4l117.6 66.9L210 323.2z"/></svg><span className="vh">YouTube</span></a></li> */}
          {/* <li className={connectionItem}><a href="https://twitter.com/nelilly" target="_blank" rel="noopener noreferrer"><svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 21 23"><path fill="currentColor" d="M17.996 4.064C18.255 9.851 13.941 16.3 6.303 16.3A11.59 11.59 0 010 14.449a8.247 8.247 0 006.088-1.705 4.11 4.11 0 01-3.84-2.859c.645.12 1.282.086 1.86-.069C2.126 9.42.765 7.638.808 5.726c.551.31 1.189.49 1.86.517A4.119 4.119 0 011.395.749a11.637 11.637 0 008.473 4.305C9.265 2.48 11.22 0 13.872 0c1.18 0 2.256.5 3.005 1.3a8.047 8.047 0 002.609-.999 4.102 4.102 0 01-1.808 2.274 8.245 8.245 0 002.359-.646 8.031 8.031 0 01-2.04 2.135z" transform="translate(0,2)"/></svg><span className="vh">Twitter</span></a></li> */}
        </ul>

        {/* <h2>Notifications</h2>
        <ul>
          <li>Updated</li>
        </ul> */}

        {/* <h2>Settings</h2>
        <ul>
          <li>Dark Mode</li>
          <li>High Contrast</li>
          <li>No/Unnecessary Motion</li>
          <li>Reduce Cyber</li>
          <li>Captions</li>
        </ul> */}
      </section>
      <section className={legal}>
        <p><a href="https://github.com/nelilly/svg-zoo/">SVG ZOO Git Repository</a></p>
        <p><strong>zoo: “a situation characterized by confusion and disorder.”</strong></p>
        <p>&copy;2022 N.E.Lilly</p>
      </section>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};
