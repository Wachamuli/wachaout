import { useRouter } from "next/router";
import { ReactNode } from "react";

import style from "../styles/Navbar.module.css";

interface Props {
  href: string;
  className?: string;
  children?: ReactNode;
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
      className={`${getActiveStyle} ${style.route}`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
