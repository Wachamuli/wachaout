import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCalendarCheck,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

import Title from "../Title";
import Aptitude from "../Aptitude";

import style from "../../styles/home/Aptitudes.module.css";

function Aptitudes() {
  return (
    <section id="aptitudes" className="section">
      <Title text="Why me?" />
      <div id={style.aptitudesContainer}>
        <Aptitude
          icon={faLightbulb}
          subtitle="Skilled"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            optio sapiente earum aperiam voluptas sed quo sit? Ex, expedita
            cupiditate."
        />
        <Aptitude
          icon={faCalendarCheck}
          subtitle="Responsible"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            optio sapiente earum aperiam voluptas sed quo sit? Ex, expedita
            cupiditate."
        />
        <Aptitude
          icon={faFire}
          subtitle="Passionate"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            optio sapiente earum aperiam voluptas sed quo sit? Ex, expedita
            cupiditate."
        />
      </div>
    </section>
  );
}

export default Aptitudes;
