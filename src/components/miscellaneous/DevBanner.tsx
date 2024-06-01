import Title from "./Title";

import styles from "styles/DevBanner.module.css";

function DevBanner() {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.title}>Development</h1>
        <div id={styles.pattern}></div>
      </div>
    </section>
  );
}

export default DevBanner;
