import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Button from "components/buttons/Button";
import Title from "components/miscellaneous/Title";

import styles from "styles/Support.module.css";

function Support() {
  return (
    <div className={`section ${styles.section}`}>
      <div className={styles.watermark}>
        <Image
          src="/resources/heart.svg"
          alt="Image not found"
          width={800}
          height={800}
        />
      </div>
      <div className={styles.sectionContainer}>
        <Title text="Support" />
        <div className={styles.textContainer}>
          <h1 className={styles.subtitle}>
            You can give me your money if you just like my work
          </h1>
          <p>without the need to work for you.</p>
        </div>

        <div className={styles.supportOptions}>
          <div className={styles.supportOptionsContainer}>
            <Button className={styles.btn}>
              <Image
                className={styles.btn}
                width={270}
                height={80}
                src="/resources/become_a_patron_button.webp"
                alt="Image not found"
              />
            </Button>
          </div>
          <div className={styles.supportOptionsContainer}>
            <Button className={styles.btn}>
              <Image
                className={styles.btn}
                width={270}
                height={80}
                src="/resources/checkout-logo-large-en.png"
                alt="Image not found"
              />
            </Button>
          </div>
          <div className={styles.supportOptionsContainer}>
            <Button className={styles.btn}>
              <Image
                width={270}
                height={80}
                src="/resources/bmc-button.png"
                alt="Image not found"
              />
            </Button>
          </div>
        </div>
        <label className={styles.moreBtn}>
          More support methods
          <FontAwesomeIcon
            className={`hvr-icon ${styles.icon}`}
            icon={faAngleDown}
          />
        </label>
        <p className={styles.info}>
          <span className={styles.infoFormatter}>Info:</span> Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Saepe deleniti rerum a, sunt ipsa 
          accusamus esse expedita provident eligendi
          assumenda! Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
}

export default Support;
