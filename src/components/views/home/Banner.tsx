import Link from "next/link";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faCode,
  faMicrophoneLines,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import Button from "components/buttons/Button";
import styles from "styles/home/Banner.module.css";

function Banner() {
  const devBtn = useRef<HTMLButtonElement>(null);
  const podBtn = useRef<HTMLButtonElement>(null);
  const illuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btns = [devBtn.current, podBtn.current, illuBtn.current];
    btns[0]?.focus({ preventScroll: true });

    function handleMouseEnterEvent(btn: HTMLButtonElement | null): () => void {
      return () => btn?.focus();
    }

    btns.forEach((btn) => {
      btn?.addEventListener("mouseenter", handleMouseEnterEvent(btn));
    });

    return () => {
      btns.forEach((btn) => {
        btn?.removeEventListener("mouseenter", handleMouseEnterEvent(btn));
      });
    }
  }, []);

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
              <Button id={styles.devBtn} className="hvr-icon-up" ref={devBtn}>
                Developer
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faCode}
                />
              </Button>
              <Button id={styles.podBtn} className="hvr-icon-up" ref={podBtn}>
                Podcaster
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faMicrophoneLines}
                />
              </Button>
              <Button id={styles.illuBtn} className="hvr-icon-up" ref={illuBtn}>
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
