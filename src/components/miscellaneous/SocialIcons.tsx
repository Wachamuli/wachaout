import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "styles/SocialIcons.module.css";

function SocialIcons({ className, colored }: { className?: string, colored?: boolean }) {
  // Instagram gradient: Move to a component?
  function gradient() {
    if (colored) {
      return (
        <svg width="0" height="0">
          <radialGradient id="gradient" r="150%" cx="30%" cy="107%">
            <stop stop-color="#fdf497" offset="0" />
            <stop stop-color="#fdf497" offset="0.05" />
            <stop stop-color="#fd5949" offset="0.45" />
            <stop stop-color="#d6249f" offset="0.6" />
            <stop stop-color="#285AEB" offset="0.9" />
          </radialGradient>
        </svg>
      )
    }
  }

  return (
    <ul className={className}>
      <li title="Youtube" className={styles.socialIconContainer}>
        <FontAwesomeIcon
          id={colored ? styles.youtubeIcon : 'white'}
          className={styles.socialIcon}
          icon={faYoutube}
        />
      </li>
      <li title="Github" className={styles.socialIconContainer}>
        <FontAwesomeIcon
          id={colored ? styles.githubIcon : 'white'}
          className={styles.socialIcon}
          icon={faGithub} 
        />
      </li>
      <li title="Twitter" className={styles.socialIconContainer}>
        <FontAwesomeIcon 
          id={colored ? styles.twitterIcon : 'white'} 
          className={styles.socialIcon} 
          icon={faTwitter} 
        />
      </li>
      <li title="Instagram" id={styles.instagramIconContainer} className={styles.socialIconContainer}>
        <span id={colored ? styles.instagramIcon : 'white'}>
          <FontAwesomeIcon 
            className={styles.socialIcon} 
            icon={faInstagram}
          />
        </span>
      </li>
      { gradient() }
    </ul>
  );
}

export default SocialIcons;
