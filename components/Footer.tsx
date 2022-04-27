import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

import SocialIcons from "./SocialIcons";
import style from "../styles/Footer.module.css";

function Footer() {
  function scrollToTop(): void {
    scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }

  return (
    <footer id={style.footer}>
      <div id={style.topFooter}>
        <div id={style.gotoBtnContainer} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faSortUp} id={style.gotoBtn} />
        </div>
        <div className={style.logo}>
          <div>LOGO</div>
        </div>
        <div className={style.summaryContainer}>
          <p className={style.summary}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quam eveniet voluptatem sunt, voluptatibus eos nihil iure obcaecati
            asperiores cupiditate sequi tempora adipisci, quasi distinctio
            incidunt! Recusandae blanditiis quasi sequi officiis ratione, optio
            ea! Sed accusantium tempora in officiis nam.
          </p>
        </div>

        <div className={style.socialIconsContainer}>
          <SocialIcons color="rgb(236, 236, 236)"/>
        </div>

        <div>
          <h5 className={style.host}>Hosted on Heroku</h5>
          <h5>Legal · Privacy · Cookies</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
