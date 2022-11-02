import styles from './style.module.css';

function Heading({ heading }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.line}></div>
    </div>
  );
}

export default Heading;
