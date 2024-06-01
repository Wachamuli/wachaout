import Title from "components/miscellaneous/Title";
import GalleryCard from "components/miscellaneous/GalleryCard";
import { galleries } from "pages/api/mockData.js";

import styles from "styles/home/GallerySelector.module.css";

function GallerySelector() {
  return (
    <section className={`section ${styles.section}`}>
      <Title text="Check my works out!" />
      <div className={styles.galleriesContainer}>
        {galleries.map((item) => (
          <GalleryCard
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySelector;
