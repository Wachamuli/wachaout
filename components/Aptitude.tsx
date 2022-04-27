import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Aptitude.module.css";

interface Props {
  icon: IconDefinition;
  subtitle: string;
  text: string;
}

function Aptitude({ icon, subtitle, text }: Props) {
  return (
    <div id={styles.aptitudeContainer}>
      <div>
        <div className={styles.aptitudeContainer}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={icon} size="4x" />
          </div>
          <div className={styles.subtitleContainer}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
          </div>
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aptitude;
