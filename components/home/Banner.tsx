import {
  faCode,
  faMicrophone,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import ButtonLink from "../ButtonLink";
import style from "../../styles/home/Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner() {
  return (
    <section id={style.banner}>
      <div id={style.bannerContainer}>
        <div className={style.bannerTopContainer}>
          <div id={style.bannerLeftSide}>
            <div id={style.bannerTitleContainer}>
              <h1 id={style.bannerTitle}>WachaOut!</h1>
              <h4 id={style.bannerSubtext}>
                What are you looking for? web pages, game development, nice
                drawings, a good interview...
              </h4>
            </div>
            <div className={style.services}>
              <ButtonLink
                id={style.devBtn}
                className="hvr-icon-up"
                href="/services/developer"
              >
                Developer
                <FontAwesomeIcon
                  className={`hvr-icon ${style.icon}`}
                  icon={faCode}
                />
              </ButtonLink>
              <ButtonLink
                id={style.podBtn}
                className="hvr-icon-up"
                href="/services/podcaster"
              >
                Podcaster
                <FontAwesomeIcon
                  className={`hvr-icon ${style.icon}`}
                  icon={faMicrophone}
                />
              </ButtonLink>
              <ButtonLink
                id={style.illuBtn}
                className="hvr-icon-up"
                href="/services/illustrator"
              >
                Illustrator
                <FontAwesomeIcon
                  className={`hvr-icon ${style.icon}`}
                  icon={faPalette}
                />
              </ButtonLink>
            </div>
          </div>

          <div id={style.bannerRightSide}>
            <div className={style.entireLogo}>
              <div className={style.logo}>
                <img id={style.logoImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
