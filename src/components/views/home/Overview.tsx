import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faPalette } from "@fortawesome/free-solid-svg-icons";

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
              <Image className={styles.logo} src="/placeholders/signature.png" alt="Image not found" width={300} height={150}/>
            </div>
            <h1 className={styles.serviceTitle}>
              Illustrator | Drawing
              <FontAwesomeIcon className={styles.icon} icon={faPalette}/>
            </h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              et repellat reprehenderit, repudiandae nesciunt asperiores enim
            </p>
            <Button className={styles.btn}>
              More info
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} />
            </Button>
          </div>
          <div className={styles.secondaryImages}>
            <div className={styles.secondaryImageContainer}>
              <label className={styles.title}>Lorem ipsum</label>
              <img
                className={`${styles.image} ${styles.secondaryImage}`}
                src="https://picsum.photos/id/139/800/500"
                alt=""
              />
            </div>
            <div className={styles.secondaryImageContainer}>
              <label className={styles.title}>Lorem ipsum</label>
              <img
                className={`${styles.image} ${styles.secondaryImage}`}
                src="https://picsum.photos/id/117/800/500"
                alt=""
              />
            </div>
            <div className={styles.secondaryImageContainer}>
              <label className={styles.title}>Lorem ipsum</label>
              <img
                className={`${styles.image} ${styles.secondaryImage}`}
                src="https://picsum.photos/id/9/800/500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
