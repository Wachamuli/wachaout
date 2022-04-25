import { useRouter } from "next/router";

import style from "../styles/Navbar.module.css";

interface Props {
  href: string;
  className?: string;
  children?: string | JSX.Element[];
}

function ActiveLink({ href, children, className }: Props) {
  const router = useRouter();
  const getActiveStyle = router.asPath === href ? className : undefined;

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
