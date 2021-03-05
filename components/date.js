import { parseISO, format } from 'date-fns';
import styles from './date.module.css';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <>
      <input
        type="date"
        name="date"
        defaultValue={format(date, 'yyyy-mm-dd')}
        title="Search date"
        className={`${styles.dateInput}`}
      />
    </>
  );
}
