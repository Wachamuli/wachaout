import { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import style from "../styles/GalleryCard.module.css";

interface Props {
  href: string;
  image: string;
  title: string;
  description: string;
  fontSize?: string;
  fontFamily?: string;
}

function GalleryCard({
  href,
  image,
  title,
  description,
  fontSize,
  fontFamily,
}: Props) {
  return (
    <Link href={href}>
      <a>
        <div
          className={style.card}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={style.cardContainer}>
            <div className={style.content}>
              <div className={style.statusDate}>
                <label>
                  <span className={style.status}>last update</span>{" "}
                  <span className={style.date}>19/3/2022</span>
                </label>
              </div>
              <h1 className={style.title} style={{ fontFamily, fontSize }}>
                {title}
              </h1>
              <p className={style.paragraph}>{description}</p>
              <div className={style.btnContainer}>
                <button className={style.seeMore}>
                  See more
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default GalleryCard;
