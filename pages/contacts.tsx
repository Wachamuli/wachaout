import SocialIcons from "../components/SocialIcons";
import Title from "../components/Title";
import style from "../styles/Contacts.module.css";

function Contacts() {
  return (
    <section className="section">
      <Title text="Contact me!" />
      <div className={style.contactsContainer}>
        <div className={style.formContainer}>
          <form action="#">
            <div className={style.topControls}>
              <div>
                <label className={style.controlLabel}>Name</label>
                <input type="text" placeholder="Your name" required autoFocus />
              </div>
              <div>
                <label className={style.controlLabel}>Email</label>
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
              id={style.textarea}
              cols={30}
              rows={10}
              placeholder="A quick message"
              required
            ></textarea>
            <button className={style.submitBtn} type="submit">
              SUBMIT
            </button>
          </form>
        </div>

        <div className={style.emails}>
          <h1 className={style.subtitle}>Find me</h1>
          <p>
            You can do it through my social networks or by writing an email to
            the corresponding address
          </p>

          <div className={style.socialIconsContainer}>
            <SocialIcons color="black"/>
          </div>

          <h4 className={style.subtitle}>For your awesome project</h4>
          <p className={style.address}>hello@wachaout.com</p>
          <h4 className={style.subtitle}>Join Us</h4>
          <p className={style.address}>hiring@wachaout.com</p>
          <h4 className={style.subtitle}>Fizz-Buzz</h4>
          <p className={style.address}>fizzbuzz@wachaout.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
