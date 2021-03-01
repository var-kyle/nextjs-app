import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './search.module.css';

export default function Search({ q }) {
  return (
    <div className={styles.container}>
      <form className={styles.searchForm}>
        <button type="submit" title="Search" className={styles.searchButton}>
          <Image
            src="/images/search.png"
            className={utilStyles.borderCircle}
            height={18}
            width={18}
            alt="Search images"
          />
        </button>
        <input
          type="search"
          defaultValue={q}
          name="q"
          placeholder="Search for a location"
          required
          title="Search"
          className={styles.searchInput}
        />
        <button type="reset" title="Clear" className={styles.searchButton}>
          <Image
            src="/images/clear.png"
            className={utilStyles.borderCircle}
            height={18}
            width={18}
            alt="Clear search bar"
          />
        </button>
      </form>
    </div>
  );
}
