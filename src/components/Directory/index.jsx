// import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { updateUrl } from 'src/shared/updateUrl';

import {
  directory,
  container,
  card,
  cardTitle,
  cardDescription,
  cardCta,
  featuredImage,
} from './style.module.css';

const Directory = ({ image, title, description, cta }) => {
  return <article className={`${directory}`} >
    <div className={featuredImage}>
      <img src={`${image}`} alt="" preload="true" layout="fill" objectfit="cover" objectposition="center" />
    </div>
    <div className={container}>
      <div className={card}>
        <h3 className={cardTitle}><Link href={updateUrl(cta.url)}>{title}</Link></h3>
        <p className={cardDescription}>{description}</p>
        {cta && <p className="cardCta">{cta.lead}<Link href={updateUrl(cta.url)}><a href={updateUrl(cta.url)} className={cardCta}>{cta.label}</a></Link></p>}
      </div>
    </div>
  </article>
};

export default Directory;

Directory.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    lead: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
