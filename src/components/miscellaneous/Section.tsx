import Image from "next/image";

import Title from "./Title";
import styles from "styles/Section.module.css";

interface Props {
  title: string;
  subtitle: string;
  paragraph: string;
  picture: string;
}

function Section({ title, subtitle, paragraph, picture }: Props) {
  return (
  <section id={styles.section} className="section">
    <div className={styles.sectionContainer}>
      <div className={styles.sectionRightSide}>

        <img className={styles.image} src={picture} alt="No image" />

      </div>
      <div className={styles.sectionLeftSide}>

        <Title text={title} />
        <div className={styles.subtitleContainer}>
          <h1 className={styles.subtitle}>
            { subtitle }
          </h1>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>{ paragraph }</p>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Section;