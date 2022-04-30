import Title from "components/miscellaneous/Title";
import GalleryCard from "components/miscellaneous/GalleryCard";

import styles from "styles/home/GallerySelector.module.css";

function GallerySelector() {
  return (
    <section className={`section ${styles.section}`}>
      <Title text="Check my works out!" />
      <div className={styles.galleriesContainer}>
        <GalleryCard
          href="/developer"
          image="/placeholders/gamedev.jpg"
          title="CodeMadness"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
          fontFamily="Anton"
          fontSize="22px"
        />
        <GalleryCard
          href="/podcaster"
          image="/placeholders/podcastoffice.png"
          title="Talking Sh*t"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
          fontFamily="Righteous"
        />
        <GalleryCard
          href="/illustrator"
          image="/placeholders/nicedraw.jpg"
          title="Magnum Opus"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
          fontFamily="Lobster Two"
        />
      </div>
    </section>
  );
}

export default GallerySelector;
