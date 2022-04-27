import Link from "next/link";
// TODO: Use Image component instead of img tag
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCode,
  faMicrophone,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

import ActiveLink from "./ActiveLink";
import style from "../styles/Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const serviceMenu = useRef<HTMLDivElement>(null);
  const servicesLabel = useRef<HTMLLIElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      const isMenuClicked = serviceMenu.current?.contains(e.target as Node);
      const isLabelClicked = servicesLabel.current?.contains(e.target as Node);

      if (!isMenuClicked && !isLabelClicked) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      serviceMenu.current!.style.visibility = "visible";
      document.addEventListener("click", handleClickOutside);
    } else {
      serviceMenu.current!.style.visibility = "hidden";
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, serviceMenu, servicesLabel]);

  function toggleServicesMenu(): void {
    setIsOpen((isOpen) => !isOpen);
  }

  function serviceRouter(): { name: string; pathname: string } {
    const splittedRoute = router.asPath.split("/");
    const lastRoute = splittedRoute.length - 1;

    const name = splittedRoute[lastRoute];
    const pathname = `/services/${name}`;
    const isServiceRoute = router.asPath.indexOf("/services") === 0;

    return isServiceRoute
      ? { name, pathname }
      : { name: "SERVICES", pathname: "" };
  }

  return (
    <nav id={style.navbar}>
      <ul id={style.logoContainer}>
        <li className={style.logo}>LOGO</li>
      </ul>

      <ul id={style.routesContainer}>
        <li className={style.routeContainer}>
          <ActiveLink className={style.activeRoute} href="/">
            HOME
          </ActiveLink>
        </li>

        <li onClick={toggleServicesMenu} ref={servicesLabel}>
          <ActiveLink
            className={style.activeRoute}
            href={serviceRouter().pathname}
          >
            {serviceRouter().name.toUpperCase()}
            <FontAwesomeIcon
              className={style.icon}
              icon={isOpen ? faAngleUp : faAngleDown}
            />
          </ActiveLink>
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
      <div id={style.servicesMenu} ref={serviceMenu}>
        <div className={style.header}>
          <h1>Services</h1>
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
        </div>
        <div className={style.menuContainer}>
          <div id={style.routesMenuLeft} className={style.routesMenuContainer}>
            <div className={style.routeMenu}>
              <Link href="/services/developer">
                <a className={style.routeTitle}>
                  Developer
                  <FontAwesomeIcon icon={faCode} />
                  <p className={style.description}>
                    Lorem ipsum dolor sit amet
                  </p>
                </a>
              </Link>
            </div>
            <div className={style.routeMenu}>
              <Link href="/services/podcaster">
                <a className={style.routeTitle}>
                  Podcaster
                  <FontAwesomeIcon icon={faMicrophone} />
                  <p className={style.description}>
                    Lorem ipsum dolor sit amet
                  </p>
                </a>
              </Link>
            </div>
            <div className={style.routeMenu}>
              <Link href="/services/illustrator">
                <a className={style.routeTitle}>
                  Illustrator
                  <FontAwesomeIcon icon={faPalette} />
                  <p className={style.description}>
                    Lorem ipsum dolor sit amet
                  </p>
                </a>
              </Link>
            </div>
          </div>

          <div id={style.routesMenuRight} className={style.routesMenuContainer}>
            <div className={style.routeMenu}>
              <div
                className={style.gallery}
                style={{ backgroundImage: `url("/placeholders/code.jpg")` }}
              >
                <h1 className={style.galleryName}>CodeMadness</h1>
              </div>
            </div>
            <div className={style.routeMenu}>
              <div
                className={style.gallery}
                style={{ backgroundImage: `url("/placeholders/podcast.jpg")` }}
              >
                <h1 className={style.galleryName}>Talking Sh*t</h1>
              </div>
            </div>
            <div className={style.routeMenu}>
              <div
                className={style.gallery}
                style={{ backgroundImage: `url("/placeholders/draw.jpg")` }}
              >
                <h1 className={style.galleryName}>Magnum Opus</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
