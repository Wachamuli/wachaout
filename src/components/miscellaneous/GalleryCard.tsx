import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/GalleryCard.module.css";

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
        <div className={styles.card}>
          <Image className={styles.image} src={image} width={328.8} height={240} alt="Image not found" />
          <div className={styles.cardContainer}>
            <div className={styles.content}>
              <div className={styles.statusDate}>
                <label>
                  <span className={styles.status}>Last update</span>{" "}
                  <span className={styles.date}>19/3/2022</span>
                </label>
              </div>
              <h1 className={styles.title} style={{ fontFamily, fontSize }}>
                {title}
              </h1>
              <p className={styles.paragraph}>{description}</p>
              <div className={styles.btnContainer}>
                <label className={styles.seeMore}>
                  SEE MORE
                  <FontAwesomeIcon className={`hvr-icon ${styles.icon}`} icon={faArrowUpRightFromSquare} />
                </label>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default GalleryCard;
