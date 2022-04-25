import { faCode, faMicrophone, faPalette } from "@fortawesome/free-solid-svg-icons";

import ButtonLink from "../ButtonLink";
import style from "../../styles/home/Banner.module.css";

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
                content="Developer"
                href="/services/developer"
                icon={faCode}
                animation="hvr-icon-up"
                fontFamily="Anton"
              />
              <ButtonLink
                content="Podcaster"
                href="/services/podcaster"
                icon={faMicrophone}
                animation="hvr-icon-up"
                fontFamily="Righteous"
              />
              <ButtonLink
                content="Illustrator"
                href="/services/illustrator"
                icon={faPalette}
                animation="hvr-icon-up"
                fontFamily="Lobster Two"
                fontWeight="bold"
              />
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
