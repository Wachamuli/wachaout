import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/DateTitle.module.css";

function DateTitle({
  date,
  projectTitle,
}: {
  date: string;
  projectTitle: string;
}) {
  return (
    <h2 className={styles.dateContainer}>
      <span className={styles.circle}>
        <FontAwesomeIcon icon={faCircle} />
      </span>
      <span className={styles.date}>{date}</span>
      <span className={styles.projectTitle}>{projectTitle}</span>
    </h2>
  );
}

export default DateTitle;
