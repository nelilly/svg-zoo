import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { 
  breadcrumbs,
} from './style.module.css';

const Breadcrumbs = ({labels}) => {
  const router = useRouter();
  const labelsArray = labels.split(': ').reverse();
  const pathsArray = router.pathname.split('/');
  const links = labelsArray.map((label, index) => ({ label, url: `/${pathsArray[index]}`}));
  const linksLength = links.length;
  const crumbs = links.map((item, index) => {
    if (linksLength === index + 1) {
      // last one
      return <li key={item.url}>{item.label}</li>;
    } else {
      // not last one
      return <li key={item.url}><Link href={`${process.env.pathPrefix}${item.url}`}>{item.label}</Link></li>;
    }
  })

  return (
    <ol className={breadcrumbs}>
      {crumbs}
    </ol>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  labels: PropTypes.string.isRequired,
};
