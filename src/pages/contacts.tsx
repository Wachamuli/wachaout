import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Button from "components/buttons/Button";
import SocialIcons from "components/miscellaneous/SocialIcons";
import Title from "components/miscellaneous/Title";
import styles from "styles/Contacts.module.css";

function Contacts() {
  return (
    <section className={styles.section}>
      <div className={styles.contactsContainer}>
        <div className={styles.formContainer}>
          <form action="#">
            <Title text="Contact me!" />
            <div className={styles.topControls}>
              <div>
                <label className={styles.controlLabel}>Name</label>
                <input type="text" placeholder="Jane Doe" required autoFocus />
              </div>
              <div>
                <label className={styles.controlLabel}>Email</label>
                <input
                  type="text"
                  placeholder="jane@example.com"
                  pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                  required
                />
              </div>
            </div>
            <textarea
              name="textarea"
              id={styles.textarea}
              cols={30}
              rows={10}
              placeholder="Hi there! I want your for my awesome project."
              required
            ></textarea>
            <div className={styles.btnContainer}>
              <Button className={`hvr-icon-float-away ${styles.btn}`}>
                Send Message
                <FontAwesomeIcon
                  className={`hvr-icon ${styles.icon}`}
                  icon={faPaperPlane}
                />
              </Button>
            </div>
          </form>
        </div>

        <div className={styles.emails}>
          <FontAwesomeIcon
            className={styles.watermark}
            icon={faEnvelope}
            size="10x"
          />
          <h1 className={styles.subtitle}>Find me</h1>
          <h2 className={styles.header}>
            You can also do it through my social networks or by writing an email to
            the corresponding addresses.
          </h2>
          <div className={styles.socialIconsContainer}>
            <SocialIcons className={styles.socialIcons} colored={true} />
            <ul className={styles.nickname}>
              <li className={styles.socialAddress}>/Wachamuli</li>
              <li className={styles.socialAddress}>/WachaDev</li>
              <li className={styles.socialAddress}>@WachaOut!</li>
              <li className={styles.socialAddress}>@WachaIG</li>
            </ul>
          </div>

          <div className={styles.emailContainer}>
            <h4 className={styles.emailTitle}>For your awesome project</h4>
            <p className={styles.emailParagraph}>hello@wachaout.com</p>
          </div>
          <div className={styles.emailContainer}>
            <h4 className={styles.emailTitle}>Other related work</h4>
            <p className={styles.emailParagraph}>interesting@wachaout.com</p>
          </div>
          <div className={styles.emailContainer}>
            <h4 className={styles.emailTitle}>Fizz-Buzz</h4>
            <p className={styles.emailParagraph}>fizzbuzz@wachaout.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
