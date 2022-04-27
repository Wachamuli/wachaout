import { useRouter } from "next/router";

import { BaseHtmlAttributes } from "./interfaces/BaseProps";
import styles from "styles/Navbar.module.css";

interface Props extends BaseHtmlAttributes {
  href: string;
}

function ActiveLink({ href, children, className }: Props) {
  const router = useRouter();
  const getActiveStyle = router.asPath === href ? className : null;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    if (href) {
      router.push(href);
    }
  }

  return (
    <a
      className={`${getActiveStyle} ${styles.route}`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
