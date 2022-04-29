import {
  faCode,
  faMicrophone,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import ButtonLink from "components/buttons/ButtonLink";
import styles from "styles/home/Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/buttons/Button";

function Banner() {
  return (
    <section id={styles.banner}>
      <div id={styles.bannerContainer}>
        <div className={styles.bannerTopContainer}>
          <div id={styles.bannerLeftSide}>
            <div id={styles.bannerTitleContainer}>
              {/* <h1 id={styles.bannerTitle}>WachaOut!</h1> */}
              <h1>What are you looking for?</h1>
              <h4 id={styles.bannerSubtext}>
                Web pages, Game Development, Nice
                Drawings, a Good Interview...
              </h4>
            </div>
            <div className={styles.services}>
              <Button
                id={styles.devBtn}
                className="hvr-icon-up"
                // href="/services/developer"
              >
                Services
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faCode}
                />
              </Button>
              <Button
                id={styles.podBtn}
                className="hvr-icon-up"
                // href="/services/podcaster"
              >
                Podcaster
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faMicrophone}
                />
              </Button>
              <Button
                id={styles.illuBtn}
                className="hvr-icon-up"
                // href="/services/illustrator"
              >
                Illustrator
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faPalette}
                />
              </Button>
            </div>
          </div>

          <div id={styles.bannerRightSide}>
            {/* <div className={styles.entireLogo}> */}
              <div className={styles.pattern}></div>
              <div className={styles.logo}>
                <img id={styles.logoImage} alt="" />
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
