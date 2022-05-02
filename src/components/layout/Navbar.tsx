import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCode,
  faMicrophoneLines,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import ActiveLink from "../miscellaneous/ActiveLink";
import styles from "styles/Navbar.module.css";

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
    <nav id={styles.navbar}>
      <ul id={styles.logoContainer}>
        <li className={styles.logo}>WachaOut!</li>
      </ul>

      <ul id={styles.routesContainer}>
        <li className={styles.routeContainer}>
          <ActiveLink className={styles.activeRoute} href="/">
            HOME
          </ActiveLink>
        </li>

        <li onClick={toggleServicesMenu} ref={servicesLabel}>
          <ActiveLink
            className={styles.activeRoute}
            href={serviceRouter().pathname}
          >
            {serviceRouter().name.toUpperCase()}
            <FontAwesomeIcon
              className={styles.icon}
              icon={isOpen ? faAngleUp : faAngleDown}
            />
          </ActiveLink>
        </li>

        <li className={styles.routeContainer}>
          <ActiveLink className={styles.activeRoute} href="/contacts">
            CONTACTS
          </ActiveLink>
        </li>

        <li className={styles.support}>
          <Link href="/support">
            <a className={styles.supportBtn}>SUPPORT</a>
          </Link>
        </li>
      </ul>

      {/* TODO: Every selection in components? */}
      <div id={styles.servicesMenu} ref={serviceMenu}>
        <div className={styles.menuContainer}>
          <div
            id={styles.routesMenuLeft}
            className={styles.routesMenuContainer}
          >
            <div className={styles.routeMenu}>
              <Link href="/services/developer">
                <a className={styles.routeTitle}>
                  <FontAwesomeIcon className={styles.icon} icon={faCode} />
                  <div>
                    <div className={styles.routeName}>
                      Developer
                      <p className={styles.description}>
                        Lorem ipsum dolor sit
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.routeMenu}>
              <Link href="/services/podcaster">
                <a className={styles.routeTitle}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faMicrophoneLines}
                  />
                  <div>
                    <div className={styles.routeName}>
                      Podcaster
                      <p className={styles.description}>
                        Lorem ipsum dolor sit
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.routeMenu}>
              <Link href="/services/illustrator">
                <a className={styles.routeTitle}>
                  <FontAwesomeIcon className={styles.icon} icon={faPalette} />
                  <div>
                    <div className={styles.routeName}>
                      Illustrator
                      <p className={styles.description}>
                        Lorem ipsum dolor sit
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div
            id={styles.routesMenuRight}
            className={styles.routesMenuContainer}
          >
            <div className={`${styles.imgContainer} ${styles.routeMenu}`}>
              <Image
                className={styles.gallery}
                width={"170px"}
                height={"100px"}
                src="/placeholders/gamedev.jpg"
              />
              <h1 className={`${styles.dev} ${styles.galleryName}`}>
                CodeMadness
              </h1>
            </div>
            <div className={`${styles.imgContainer} ${styles.routeMenu}`}>
              <Image
                className={styles.gallery}
                width={"170px"}
                height={"100px"}
                src="/placeholders/podcastoffice.png"
              />
              <h1 className={`${styles.pod} ${styles.galleryName}`}>
                Talking Sh*t
              </h1>
            </div>
            <div className={`${styles.imgContainer} ${styles.routeMenu}`}>
              <Image
                width={"170px"}
                height={"100px"}
                className={styles.gallery}
                src="/placeholders/nicedraw.jpg"
              />
              <h1 className={`${styles.illu} ${styles.galleryName}`}>
                Magnum Opus
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
