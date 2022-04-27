import { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/GalleryCard.module.css";

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
          className={styles.card}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.cardContainer}>
            <div className={styles.content}>
              <div className={styles.statusDate}>
                <label>
                  <span className={styles.status}>last update</span>{" "}
                  <span className={styles.date}>19/3/2022</span>
                </label>
              </div>
              <h1 className={styles.title} style={{ fontFamily, fontSize }}>
                {title}
              </h1>
              <p className={styles.paragraph}>{description}</p>
              <div className={styles.btnContainer}>
                <button className={styles.seeMore}>
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
