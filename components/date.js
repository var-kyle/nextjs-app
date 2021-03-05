import styles from './date.module.css';

export default function Date({ dateString }) {
  return (
    <>
      <input
        type="date"
        name="date"
        defaultValue={dateString}
        title="Search date"
        className={`${styles.dateInput}`}
      />
    </>
  );
}
