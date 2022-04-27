import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

import style from "../styles/ButtonLink.module.css";

interface Props {
  href: string;
  children?: ReactNode;
  id?: string;
  className?: string;
  styles?: CSSProperties;
}

function ButtonLink({ href, children, id, className, styles }: Props) {
  return (
    <Link href={href}>
      <a id={id} className={`${className} ${style.btn}`} style={styles}>
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
