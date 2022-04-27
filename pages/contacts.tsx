import SocialIcons from "components/SocialIcons";
import Title from "components/Title";
import styles from "styles/Contacts.module.css";

function Contacts() {
  return (
    <section className="section">
      <Title text="Contact me!" />
      <div className={styles.contactsContainer}>
        <div className={styles.formContainer}>
          <form action="#">
            <div className={styles.topControls}>
              <div>
                <label className={styles.controlLabel}>Name</label>
                <input type="text" placeholder="Your name" required autoFocus />
              </div>
              <div>
                <label className={styles.controlLabel}>Email</label>
                <input
                  type="text"
                  placeholder="name@example.com"
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
              placeholder="A quick message"
              required
            ></textarea>
            <button className={styles.submitBtn} type="submit">
              SUBMIT
            </button>
          </form>
        </div>

        <div className={styles.emails}>
          <h1 className={styles.subtitle}>Find me</h1>
          <p>
            You can do it through my social networks or by writing an email to
            the corresponding address
          </p>

          <div className={styles.socialIconsContainer}>
            <SocialIcons className={styles.socialIcons} />
          </div>

          <h4 className={styles.subtitle}>For your awesome project</h4>
          <p className={styles.address}>hello@wachaout.com</p>
          <h4 className={styles.subtitle}>Join Us</h4>
          <p className={styles.address}>hiring@wachaout.com</p>
          <h4 className={styles.subtitle}>Fizz-Buzz</h4>
          <p className={styles.address}>fizzbuzz@wachaout.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
