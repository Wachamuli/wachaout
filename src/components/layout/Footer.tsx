import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

import SocialIcons from "../miscellaneous/SocialIcons";
import styles from "styles/Footer.module.css";

function Footer() {
  function scrollToTop(): void {
    scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }

  return (
    <footer id={styles.footer}>
      <div id={styles.topFooter}>
        <div id={styles.gotoBtnContainer} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faSortUp} id={styles.gotoBtn} />
        </div>
        <div className={styles.logo}>
          <div>LOGO</div>
        </div>
        <div className={styles.summaryContainer}>
          <p className={styles.summary}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quam eveniet voluptatem sunt, voluptatibus eos nihil iure obcaecati
            asperiores cupiditate sequi tempora adipisci, quasi distinctio
            incidunt! Recusandae blanditiis quasi sequi officiis ratione, optio
            ea! Sed accusantium tempora in officiis nam.
          </p>
        </div>

        <div className={styles.socialIconsContainer}>
          <SocialIcons className={styles.socialIcons}/>
        </div>

        <div>
          <h5 className={styles.host}>Hosted on Heroku</h5>
          <h5>Legal · Privacy · Cookies</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
