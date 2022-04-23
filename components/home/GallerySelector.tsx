import Title from "../Title";
import GalleryCard from "../GalleryCard";

import style from "../../styles/home/GallerySelector.module.css";

function GallerySelector() {
  return (
    <div className="section" style={{ background: "#f3f3f3" }}>
      <Title text="Check my works!" />
      <div className={style.galleriesContainer}>
        <GalleryCard
          href="/developer"
          image="/static/placeholders/code.jpg"
          title="CodeMadness"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
          fontFamily="Anton"
          fontSize="22px"
        />
        <GalleryCard
          href="/podcaster"
          image="/static/placeholders/podcast.jpg"
          title="Talking Sh*t"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
          fontFamily="Righteous"
        />
        <GalleryCard
          href="/illustrator"
          image="/static/placeholders/draw.jpg"
          title="Magnum Opus"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
          fontFamily="Lobster Two"
        />
      </div>
    </div>
  );
}

export default GallerySelector;
