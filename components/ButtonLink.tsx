import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import style from "../styles/ButtonLink.module.css";

interface Props {
  content: string;
  href: string;
  icon: IconDefinition;
  fontFamily?: string;
  fontWeight?: string;
}

function ButtonLink({ content, href, icon, fontFamily, fontWeight }: Props) {
  return (
    <Link href={href}>
      <a className={style.btn} style={{ fontFamily, fontWeight }}>
        {content}
        <FontAwesomeIcon className={style.icon} icon={icon} />
      </a>
    </Link>
  );
}

export default ButtonLink;
