import Image from "next/image";

import Title from "./Title";
import DateTitle from "./DateTitle";

import styles from "styles/SeeProgress.module.css";

function LastUpdates() {
  return (
    <section className={`section ${styles.section}`}>
      <Title text="See the progress" />
      <DateTitle
        date="May 14, 2022"
        projectTitle="WachaOut in pre-alpha of the alpha version"
      />
      <div className={styles.gallery}>
        <div id={styles.mainImage} className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/a.png"
            alt="Image not found"
            width={1100}
            height={450}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/b.png"
            alt="Image not found"
            width={1000}
            height={450}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/c.png"
            alt="Image not found"
            width={1000}
            height={450}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/d.png"
            alt="Image not found"
            width={1000}
            height={450}
          />
        </div>
      </div>
      <DateTitle
        date="July 24, 2022"
        projectTitle="Something else"
      />
      <div className={styles.gallery}>
        <div id={styles.mainImage} className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/f.png"
            alt="Image not found"
            width={1100}
            height={450}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/g.png"
            alt="Image not found"
            width={1000}
            height={450}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/e.png"
            alt="Image not found"
            width={1000}
            height={450}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/works/d.png"
            alt="Image not found"
            width={1000}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}

export default LastUpdates;
