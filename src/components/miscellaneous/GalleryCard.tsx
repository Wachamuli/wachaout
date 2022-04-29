import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import Button from "components/buttons/Button";
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
          <img className={styles.image} src={image} alt="Image not found" />
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
                <Button className="hvr-icon-forward">
                  See more
                  <FontAwesomeIcon className={`hvr-icon ${styles.icon}`} icon={faCircleArrowRight} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default GalleryCard;
