import {
  faArrowRightLong,
  faCode,
  faMicrophoneLines,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import styles from "styles/home/Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/buttons/Button";
import Link from "next/link";

function Banner() {
  return (
    <section id={styles.banner}>
      <div id={styles.bannerContainer}>
        <div className={styles.bannerTopContainer}>
          <div id={styles.bannerLeftSide}>
            <div id={styles.bannerTitleContainer}>
              <h2>What are you looking for?</h2>
              <h1 id={styles.bannerSubtext}>
                Web pages, Game Development, Nice Drawings, a Good Interview...
              </h1>
              <Link href="/contacts">
                <a className={`hvr-icon-forward ${styles.moreBtn}`}>
                  More
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className={`hvr-icon ${styles.icon}`}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.services}>
              <Button id={styles.devBtn} className="hvr-icon-up">
                Developer
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faCode}
                />
              </Button>
              <Button id={styles.podBtn} className="hvr-icon-up">
                Podcaster
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faMicrophoneLines}
                />
              </Button>
              <Button id={styles.illuBtn} className="hvr-icon-up">
                Illustrator
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faPalette}
                />
              </Button>
            </div>
          </div>

          <div id={styles.bannerRightSide}>
            <div className={styles.entireLogo}>
              <div className={styles.pattern}></div>
              <div className={styles.logo}>
                {/* <Image id={styles.logoImage} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
