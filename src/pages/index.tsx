import Banner from "components/views/home/Banner";
import Overview from "components/views/home/Overview";
import Section from "components/miscellaneous/Section";
import Aptitudes from "components/views/home/Aptitudes";
import GallerySelector from "components/views/home/GallerySelector";

export default function Home() {
  return (
    <>
      <Banner />
      <Overview/>
      <Section
        title="Who am I?"
        subtitle="A very dedicated person offering his services Lorem ipsum dolor sit amet."
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa nam quam, dolorem pariatur placeat corrupti inventore
          maiores. Voluptate alias hic mollitia incidunt adipisci,
          consectet quasi. Aut assumenda consectetur vero dicta fugit
          placeat exercitationem ea necessitatibus, odio"
        picture="https://picsum.photos/id/237/200/300"
      />
      <Aptitudes/>
      <GallerySelector/>
    </>
  );
}
