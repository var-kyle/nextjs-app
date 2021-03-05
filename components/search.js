import Image from 'next/image';
import Date from './date';
import utilStyles from '../styles/utils.module.css';
import styles from './search.module.css';

export default function Search({ q, date }) {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm} data-testid="search-form">
        <button
          type="submit"
          title="Search"
          className={`${styles.searchButton}`}
        >
          <Image
            data-testid="search-image"
            src="/images/search.png"
            className={`${utilStyles.borderCircle}`}
            height={18}
            width={18}
            alt="Search images"
          />
        </button>
        <div className={`${styles.searchContainer}`}>
          <input
            data-testid="search-input"
            type="search"
            defaultValue={q}
            name="q"
            placeholder="Search for a location"
            required
            title="Search"
            className={`${styles.searchInput}`}
          />
        </div>
        <div className={`${styles.dateContainer}`}>
          <Date dateString={date} />
        </div>
      </form>
    </div>
  );
}
