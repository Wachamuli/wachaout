import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import Button from "components/buttons/Button";
import Title from "components/miscellaneous/Title";
import styles from "styles/home/Overview.module.css";

function Overview() {
  return (
    <section className="section">
      <Title text="Overview" />
      <div className={styles.sectionContainer}>
        <div className={styles.imagesContainer}>
          <img
            className={`${styles.image} ${styles.primaryImage}`}
            src="https://picsum.photos/id/129/800/500"
            alt=""
          />
          <div className={styles.content}>
            <div className={styles.logoContainer}>
              {/* <img className={styles.logo} src="#" alt="Image not found"/> */}
            </div>
            <h1 className={styles.serviceTitle}>Game Development</h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              et repellat reprehenderit, repudiandae nesciunt asperiores enim
            </p>
            <Button className={styles.btn}>
              More info
              <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.icon} />
            </Button>
          </div>
          <div className={styles.secondaryImageContainer}>
            <img
              className={`${styles.image} ${styles.secondaryImage}`}
              src="https://picsum.photos/id/139/800/500"
              alt=""
            />
            <img
              id={styles.imageBetween}
              className={`${styles.image} ${styles.secondaryImage}`}
              src="https://picsum.photos/id/117/800/500"
              alt=""
            />
            <img
              className={`${styles.image} ${styles.secondaryImage}`}
              src="https://picsum.photos/id/9/800/500"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
