import {
  faCode,
  faMicrophone,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import ButtonLink from "../ButtonLink";
import styles from "../../styles/home/Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner() {
  return (
    <section id={styles.banner}>
      <div id={styles.bannerContainer}>
        <div className={styles.bannerTopContainer}>
          <div id={styles.bannerLeftSide}>
            <div id={styles.bannerTitleContainer}>
              <h1 id={styles.bannerTitle}>WachaOut!</h1>
              <h4 id={styles.bannerSubtext}>
                What are you looking for? web pages, game development, nice
                drawings, a good interview...
              </h4>
            </div>
            <div className={styles.services}>
              <ButtonLink
                id={styles.devBtn}
                className="hvr-icon-up"
                href="/services/developer"
              >
                Developer
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faCode}
                />
              </ButtonLink>
              <ButtonLink
                id={styles.podBtn}
                className="hvr-icon-up"
                href="/services/podcaster"
              >
                Podcaster
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faMicrophone}
                />
              </ButtonLink>
              <ButtonLink
                id={styles.illuBtn}
                className="hvr-icon-up"
                href="/services/illustrator"
              >
                Illustrator
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faPalette}
                />
              </ButtonLink>
            </div>
          </div>

          <div id={styles.bannerRightSide}>
            <div className={styles.entireLogo}>
              <div className={styles.logo}>
                <img id={styles.logoImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
