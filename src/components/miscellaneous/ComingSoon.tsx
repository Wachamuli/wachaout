import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import styles from "styles/ComingSoon.module.css";

function ComingSoon() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.frame}>
        <FontAwesomeIcon className={styles.icon} icon={faClock} size="3x" />
        <h1 className={styles.coming}>COMING SOON</h1>
        <h4 className={styles.paragraph}>
          I'm cooking something new, wait a while for it.
        </h4>
      </div>
    </section>
  );
}

export default ComingSoon;
