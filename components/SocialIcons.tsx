import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/SocialIcons.module.css";

function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <li className={styles.socialIconContainer}>
        <FontAwesomeIcon className={styles.socialIcon} icon={faYoutube} />
      </li>
      <li className={styles.socialIconContainer}>
        <FontAwesomeIcon className={styles.socialIcon} icon={faGithub} />
      </li>
      <li className={styles.socialIconContainer}>
        <FontAwesomeIcon className={styles.socialIcon} icon={faTwitter} />
      </li>
      <li className={styles.socialIconContainer}>
        <FontAwesomeIcon className={styles.socialIcon} icon={faInstagram} />
      </li>
    </ul>
  );
}

export default SocialIcons;
