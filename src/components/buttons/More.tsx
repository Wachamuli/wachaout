import Link from "next/link";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/More.module.css";

function More({ children }: { children: ReactNode }) {
  return (
    <Link href="/contacts">
      <a className={`hvr-icon-forward ${styles.moreBtn} ${styles.className}`}>
        {children}
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className={`hvr-icon ${styles.icon}`}
        />
      </a>
    </Link>
  );
}

export default More;
