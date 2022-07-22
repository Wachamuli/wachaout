import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Title from "./Title";
import DateTitle from "./DateTitle";

import styles from "styles/SeeProgress.module.css";

function SeeProgress() {
  return (
    <section className={`section ${styles.section}`}>
      <Title text="See the progress" />
      <DateTitle
        date="May 14, 2022"
        projectTitle="WachaOut in pre-alpha of the alpha version"
      />
      <div className={styles.gallery}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/b.png"
            alt="Image not found"
            width={900}
            height={450}
          />
        </div>
        <div id={styles.mainImage} className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/a.png"
            alt="Image not found"
            width={900}
            height={450}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/c.png"
            alt="Image not found"
            width={900}
            height={450}
          />
        </div>
      </div>
      <div className={styles.moveBtnsContainer}>
        <div className={styles.moveBtns}>
          <FontAwesomeIcon
            className={styles.moveBtn}
            icon={faCircleChevronLeft}
          />
          <FontAwesomeIcon
            className={styles.moveBtn}
            icon={faCircleChevronRight}
          />
        </div>
      </div>
    </section>
  );
}

export default SeeProgress;
