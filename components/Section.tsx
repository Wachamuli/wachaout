import Title from "./Title";
import style from "../styles/Section.module.css";

interface Props {
  title: string;
  subtitle: string;
  paragraph: string;
  picture: string;
}

function Section({ title, subtitle, paragraph, picture }: Props) {
  return (
  <section id={style.section} className="section">
    <div className={style.sectionContainer}>
      <div className={style.sectionLeftSide}>
        <Title text={title} />
        <div className={style.subtitleContainer}>
          <h1 className={style.subtitle}>
            { subtitle }
          </h1>
        </div>
        <div className={style.paragraphContainer}>
          <p className={style.paragraph}>{ paragraph }</p>
        </div>
      </div>
      <div className={style.sectionRightSide}>
        <img className={style.image} src={picture} alt="No image" />
      </div>
    </div>
  </section>
  )
}

export default Section;