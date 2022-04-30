import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/404.module.css";

function Custom404() {
  return (
    <section className={`section ${styles.section}`}>
      <FontAwesomeIcon id={styles.watermark} icon={faMagnifyingGlass} size="10x" />
      <div className={styles.top}>
        <h1 className={styles.errorNumber}>404</h1>
        <h2 className={styles.errorName}>Page Not Found</h2>
      </div>
      <p className={styles.paragraph}>
        Oh no! This page is not available, but look at the bright side, you've
        found a 404 error.
      </p>
    </section>
  );
}

export default Custom404;
