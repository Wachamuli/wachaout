import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import style from "../styles/SocialIcons.module.css";

function SocialIcons({ color }: { color?: string }) {
  const colorStyle = { color };

  return (
    // Too much boilerplate with colorStyle, I need a better way for style props
    <ul>
      <li className={style.socialIconContainer} style={colorStyle}>
        <FontAwesomeIcon className={style.socialIcon} icon={faYoutube} />
      </li>
      <li className={style.socialIconContainer} style={colorStyle}>
        <FontAwesomeIcon className={style.socialIcon} icon={faGithub} />
      </li>
      <li className={style.socialIconContainer} style={colorStyle}>
        <FontAwesomeIcon className={style.socialIcon} icon={faTwitter} />
      </li>
      <li className={style.socialIconContainer} style={colorStyle}>
        <FontAwesomeIcon className={style.socialIcon} icon={faInstagram} />
      </li>
    </ul>
  );
}

export default SocialIcons;
