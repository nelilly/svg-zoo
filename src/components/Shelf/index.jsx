import PropTypes from 'prop-types';
import { keyChange } from 'src/shared/functions/keyChange';
import { 
  shelf,
  shelfTitle,
  bookList,
  book,
  moreArrow,
  moreButton,
} from './style.module.css';

const Shelf = ({books, color = 'var(--color-canvas-text)', canvas, title}) => {

  return (
    <article className={shelf} style={{backgroundColor: canvas, color}}>
      <h3 className={shelfTitle}>{title}</h3>
      <div className={bookList}>
        {books.map(({title, cover}) => (
          <figure key={`shelf_${keyChange(title)}}`} className={book}>
            <img src={`${process.env.pathPrefix}${cover}`} alt="" />
            <figcaption>{title}</figcaption>
          </figure>)
        )}
        <div className={book}>
          <a href={`https://journal.lilly.art/${keyChange(title)}/`} title={`More recommended books from ${title}`} aria-label={`More recommended books from ${title}`}  className={moreButton}><span className={moreArrow} aria-hidden="true">&rarr;</span> see all</a>
        </div>
      </div>
    </article>
  );
};

export default Shelf;

Shelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  })).isRequired,
  canvas: PropTypes.string.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};
