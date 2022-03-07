import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  nav,
  navPanel,
  navPanelTitle,
  navLink,
  helm,
  helmItem,
  navigationClose,
  open as openStyle,
  siteId,
  siteLogo,
  siteTitle,
  active,
} from './style.module.css';
const KEYCODE_TAB = 9;
const ESC = 27;

const Nav = () => {
  const router = useRouter();
  const routed = (path) => router.pathname === path ? 'page' : '';
  const activePage = (path) => {
    if (router.pathname.includes(path) && path !== '/') { return active }
    if (path === '/' && router.pathname.length === 1) { return active }
    return '';
  };
  const navOpenRef = useRef(null);
  const navCloseRef = useRef(null);
  const navPanelRef = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) { return; }
    if (open) {
      navCloseRef.current.focus();
    } else {
      navOpenRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const focusableEls = navPanelRef?.current?.querySelectorAll('a[href], button');
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const listener = (event) => {
        if (event.keyCode === ESC) {
          setOpen(false);
        }
        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusableEl) {
              lastFocusableEl.focus();
              event.preventDefault();
            }
          } else if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            event.preventDefault();
          }
        }
      };
      document.addEventListener('keydown', listener);

      return () => {
        document.removeEventListener('keydown', listener);
      };
    }
    return '';
  });

  return (
    <nav className={helm}>
      <a href={`${process.env.pathPrefix}/`} className={siteId}>
        <img className={siteLogo} src={`${process.env.pathPrefix}/assets/images/svgZooLogo.svg`} alt="" />
        <span className={siteTitle}>SVG ZOO</span>
      </a>
      <nav className={`${nav} ${open ? openStyle : ''}`}>
        <button id="main_nav" className={helmItem} type="button" aria-expanded={!!open} aria-label="Expand navigation menu" onClick={() => setOpen(!open)} ref={navOpenRef} title="main navigation"><svg id="helm" viewBox="0,0 100,100" height="40" width="40" stroke="currentColor" strokeWidth="5" strokeLinecap="round"><circle cx="50" cy="50" r="25" fill="none" strokeWidth="15" /><circle cx="50" cy="50" r="5" fill="none" /><path d="m50,5v15m0,60v15m-45,-45h15m60,0h15" /><path d="m50,5v15m0,60v15m-45,-45h15m60,0h15" transform="rotate(45 50,50)" /></svg></button>
        <section className={navPanel} ref={navPanelRef}>
          <button className={navigationClose} type="button" aria-expanded={!!open} aria-label="Close navigation menu" onClick={() => setOpen(!open)} ref={navCloseRef}><svg viewBox="0,0 100,100" height="40" width="40" stroke="currentColor" strokeWidth="10" strokeLinecap="round"><path d="M25,25 75,75 M25,75 75,25" fill="none" /></svg></button>
            <section>
              <h2 className={navPanelTitle}><svg viewBox="0,0 100,100" height="40" width="40" stroke="currentColor" strokeWidth="5" strokeLinecap="round"><path d="M20,33.333H80M20,50H80M20,66.666H80" /></svg><span className="vh">Table of Contents</span></h2>
              <ul>
                {/* <Link href={`/colophon`}><a className={navLink} aria-current={routed('/colophon')}>Colophon</a></Link> */}
                <li className={activePage('/')}><Link href={`${process.env.pathPrefix}/`}><a className={navLink} aria-current={routed('/')}>Home</a></Link></li>
                <li className={activePage('/guides')}><Link href={`${process.env.pathPrefix}/guides`}><a className={navLink} aria-current={routed('/guides')}>Guides</a></Link></li>
                <li className={activePage('/tutorials')}><Link href={`${process.env.pathPrefix}/tutorials`}><a className={navLink} aria-current={routed('/tutorials')}>Tutorials</a></Link></li>
                <li className={activePage('/libraries')}><Link href={`${process.env.pathPrefix}/libraries`}><a className={navLink} aria-current={routed('/libraries')}>Libraries</a></Link></li>
                <li className={activePage('/tools')}><Link href={`${process.env.pathPrefix}/tools`}><a className={navLink} aria-current={routed('/tools')}>Tools</a></Link></li>
                {/* <li className={activePage('/examples')}><Link href={`${process.env.pathPrefix}/examples`}><a className={navLink} aria-current={routed('/examples')}>Examples</a></Link></li> */}
                <li className={activePage('/news')}><Link href={`${process.env.pathPrefix}/news`}><a className={navLink} aria-current={routed('/news')}>News</a></Link></li>
              </ul>
            </section>
            <section>
              <h2 className={navPanelTitle}><svg viewBox="0,0 100,100" height="40" width="40" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"><path d="m20,70h60l-7.5,-15v-15a1,1 0 0 0 -44,-0v15Z" /><path d="m60,75a1,1 0 0 1 -20,-0z" stroke="none" /></svg><span className="vh">Notifications</span></h2>
              <ul>
                {/* <li className={activePage('/about')}><Link href={`${process.env.pathPrefix}/about`}><a className={navLink} aria-current={routed('/about')}>About</a></Link></li> */}
                <li className={activePage('/faqs')}><Link href={`${process.env.pathPrefix}/faqs`}><a className={navLink} aria-current={routed('/faqs')}>FAQs</a></Link></li>
                {/* <li className={activePage('/contact')}><Link href={`${process.env.pathPrefix}/contact`}><a className={navLink} aria-current={routed('/contact')}>Contact</a></Link></li> */}
                {/* <li className={activePage('/announcements')}><Link href={`${process.env.pathPrefix}/announcements`}><a className={navLink} aria-current={routed('/announcements')}>Announcements</a></Link></li> */}
                <li className={activePage('/links')}><Link href={`${process.env.pathPrefix}/links`}><a className={navLink} aria-current={routed('/links')}>Links</a></Link></li>
                <li className={activePage('/colophon')}><Link href={`${process.env.pathPrefix}/colophon`}><a className={navLink} aria-current={routed('/colophon')}>Colophon</a></Link></li>
              </ul>
          </section>
          {/* <section>
            <h2 className={navPanelTitle}><svg viewBox="0,0 100,100" height="40" width="40" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"><path d="m20,70h60l-7.5,-15v-15a1,1 0 0 0 -44,-0v15Z" fill="none" /><path d="m60,75a1,1 0 0 1 -20,-0z" stroke="none" /></svg><span className="vh">Settings</span></h2>
            <ul>
              <li className={activePage('/about')}><button>Dark Mode</button></li>
              <li className={activePage('/about')}>High Contrast</li>
              <li className={activePage('/about')}>No/Unnecessary Motion</li>
              <li className={activePage('/about')}>Captions</li>
            </ul>
          </section> */}
        </section>
      </nav>
    </nav>
  );
};

export default Nav;
