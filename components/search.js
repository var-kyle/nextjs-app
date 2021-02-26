import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './search.module.css';
import searchHandler from '../pages/api/search';

export default function Search({ value }) {
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
          value={value}
          name="search"
          placeholder="Search for a location"
          required
          title="Search"
          className={styles.searchInput}
          onSubmit={(e) => {
            searchHandler(e.target.value);
          }}
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
