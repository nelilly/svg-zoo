import PropTypes from 'prop-types';
import Nav from 'src/components/Nav';
// import Menu from 'src/components/Menu';
// import Notice from 'src/components/Notice';
// import data from 'src/data/_global.json';
import Footer from 'src/components/Footer';

import { 
  main,
  siteHeader,
} from './style.module.css';

const Layout = ({ children, lastUpdated }) => (
  <>
  <header className={siteHeader}>
    <Nav />
  </header>
    <main id="main" className={main}>{children}</main>
    <Footer lastUpdated={lastUpdated} />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  lastUpdated: PropTypes.string.isRequired,
};
