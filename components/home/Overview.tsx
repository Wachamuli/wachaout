import Title from "../Title"
import style from "../../styles/home/Overview.module.css";

function Overview() {
  return (
  <section className="section">
    <Title text="Overview" />
    <div className={style.sectionContainer}>
      <div>
        <h1 id={style.developerSubtitle}>Game and Web Development</h1>
        <div className={style.paragraphContainer}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
            ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Molestias, eligendi?
          </p>
        </div>
        <button className={style.btn}>Try demo</button>
      </div>

      <div className={style.imagesContainer}>
        <img
          className={style.primaryImage}
          src="https://picsum.photos/seed/picsum/400"
          alt=""
        />
        <img className={style.image} src="https://picsum.photos/seed/picsum/400" alt="" />
        <img className={style.image} src="https://picsum.photos/seed/picsum/400" alt="" />
        <img className={style.image} src="https://picsum.photos/seed/picsum/400" alt="" />
      </div>

      {/* <h1 id="podcaster-subtitle">Interviews and Shows</h1> */}
      {/* <h1 id="illustrator-subtitle">Digital Art</h1> */}
    </div>
  </section>
  )
}

export default Overview;
