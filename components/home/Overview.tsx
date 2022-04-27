import Title from "../Title";
import styles from "../../styles/home/Overview.module.css";

function Overview() {
  return (
    <section className="section">
      <Title text="Overview" />
      <div className={styles.sectionContainer}>
        <div className={styles.imagesContainer}>
          <img
            className={`${styles.image} ${styles.primaryImage}`}
            src="https://picsum.photos/id/129/800/500"
            alt=""
          />
          <div className={styles.content}>
            <h1>Game Development</h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              et repellat reprehenderit, repudiandae nesciunt asperiores enim
              veniam labore expedita, ipsam beatae quaerat officia explicabo
              nihil veritatis corporis? Iusto, placeat accusamus.
            </p>
            <button className={styles.btn}>Check it out</button>
          </div>
          <div className={styles.secondaryImageContainer}>
            <img
              className={`${styles.image} ${styles.secondaryImage}`}
              src="https://picsum.photos/id/139/800/500"
              alt=""
            />
            <img
              id={styles.imageBetween}
              className={`${styles.image} ${styles.secondaryImage}`}
              src="https://picsum.photos/id/117/800/500"
              alt=""
            />
            <img
              className={`${styles.image} ${styles.secondaryImage}`}
              src="https://picsum.photos/id/9/800/500"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
