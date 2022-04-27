import Link from "next/link";

import { BaseHtmlAttributes } from "../interfaces/BaseProps";
import styles from "styles/ButtonLink.module.css";

interface Props extends BaseHtmlAttributes {
  href: string;
}

function ButtonLink({ href, id, className, style, children }: Props) {
  return (
    <Link href={href}>
      <a id={id} className={`${className} ${styles.btn}`} style={style}>
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
