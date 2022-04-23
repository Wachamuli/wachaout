import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCode,
  faMicrophone,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import style from "../styles/Navbar.module.css";
import ActiveLink from "./ActiveLink";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const serviceMenu = useRef<HTMLDivElement>(null);
  const servicesLabel = useRef<HTMLLabelElement>(null);

  function toggleServicesMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      const isMenuClicked = serviceMenu.current?.contains(e.target as Node);
      const isLabelClicked = servicesLabel.current?.contains(e.target as Node);

      if (isOpen && !isMenuClicked && !isLabelClicked) {
        setIsOpen(false);
      }
    }

    function openMenu(): void {
      const serviceMenuStyle = serviceMenu.current?.style;
      if (isOpen) {
        serviceMenuStyle!.height = "fit-content";
        serviceMenuStyle!.padding = "1rem";
      } else {
        serviceMenuStyle!.height = "0px";
        serviceMenuStyle!.padding = "0px";
      }
    }

    document.addEventListener("click", handleClickOutside);
    openMenu();
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const router = useRouter();
  const isServiceRoute = router.asPath.indexOf("/services") === 0;

  function currentRoute(): string {
    const splittedRoute = router.asPath.split("/");
    const lastRoute = splittedRoute.length - 1;
    const route = splittedRoute[lastRoute];
    return route;
  }

  return (
    <nav id={style.navbar}>
      <ul id={style.logoContainer}>
        <li className={style.logo}>LOGO</li>
      </ul>

      <ul id={style.routesContainer}>
        <li className={style.routeContainer}>
          <ActiveLink className={`${style.activeRoute}`} href="/">
            HOME
          </ActiveLink>
        </li>

        <li>
          <div onClick={toggleServicesMenu}>
            {isServiceRoute ? (
              <ActiveLink
                href={`/services/${currentRoute().toLowerCase()}`}
                className={style.activeRoute}
              >
                <label>{currentRoute().toUpperCase()}</label>
                <FontAwesomeIcon className={style.icon} icon={faAngleDown} />
              </ActiveLink>
            ) : (
              <label className={style.route} ref={servicesLabel}>
                SERVICES
                <FontAwesomeIcon className={style.icon} icon={faAngleDown} />
              </label>
            )}
          </div>
        </li>

        <li className={style.routeContainer}>
          <ActiveLink className={style.activeRoute} href="/contacts">
            CONTACTS
          </ActiveLink>
        </li>

        <li className={style.support}>
          <Link href="/support">
            <a className={style.supportBtn}>SUPPORT</a>
          </Link>
        </li>
      </ul>

      {/* Every selection in components? */}
      <div id={style.serviceMenu} ref={serviceMenu}>
        <div className={style.servicesContainer}>
          <Link href="/services/developer">
            <a className={style.view}>
              Developer
              <FontAwesomeIcon className={style.icon} icon={faCode} />
            </a>
          </Link>
          <i className="icon fas fa-code"></i>
          <Link href="/services/illustrator">
            <a className={style.view}>
              Illustrator
              <FontAwesomeIcon className={style.icon} icon={faPalette} />
            </a>
          </Link>
          <i className="icon fas fa-palette"></i>
          <Link href="/services/podcaster">
            <a className={style.view}>
              Podcaster
              <FontAwesomeIcon className={style.icon} icon={faMicrophone} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
