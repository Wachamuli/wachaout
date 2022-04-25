import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import style from "../styles/Aptitude.module.css";

interface Props {
  icon: IconDefinition;
  subtitle: string;
  text: string;
}

function Aptitude({ icon, subtitle, text }: Props) {
  return (
    <div id={style.aptitudeContainer}>
      <div>
        <div className={style.aptitudeContainer}>
          <div className={style.iconContainer}>
            <FontAwesomeIcon icon={icon} size="4x" />
          </div>
          <div className={style.subtitleContainer}>
            <h3 className={style.subtitle}>{subtitle}</h3>
          </div>
          <div className={style.paragraphContainer}>
            <p className={style.paragraph}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aptitude;
